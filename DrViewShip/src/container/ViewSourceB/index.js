import {Component, h} from 'preact';
import {bind} from 'decko';
import {route} from 'preact-router';
import Promise from 'promise';

import BaseRequest from '../../request/BaseRequest';

import Round from '../../components/Round';
import PrizeBox from '../../components/PrizeBox';
import Modal from '../../components/Modal';

const Utils = window.Utils;
const Native = window.Native;
/**
 * 2. 填写投保信息
 */

class ViewSourceB extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowRuleModal: false,    //规则弹窗
            isShowEndModal: false,      //结束弹窗
            TASKDATA: []        //所有任务
        };
    }

    static defaultProps = {
        code: window.pageInfo.code
    }

    componentWillMount() {
        BaseRequest.getDetail(this.props.code).then((res) => {
            const data = res.tasks;
            const arr = this.initRule(data);
            
            this.setState({TASKDATA: arr, currentTime: res.currentTime});
        });
    }

    initRule(data) {
        let arr = [];
        let map = {};
        for (let i = 0; i < data.length; i++) {
            let ai = data[i];
            if (!map[ai.openTime]) {
                arr.push([ai]);
                map[ai.openTime] = ai;
            } else {
                for (let j = 0; j < arr.length; j++) {
                    let dj = arr[j];
                    if (dj[0].openTime === ai.openTime) {
                        dj.push(ai);
                    }
                }
            }
        }
        return arr;
    }

    componentDidMount() {   //埋点
        Native.sendPV('ViewSourceB');
        Utils.setTitle('新手活动');
    }

    @bind
    handleModal(idName) {   //弹窗控制
        if (idName === 'BoxRuleModal') {
            let bool = !this.state.isShowRuleModal;
            this.setState({isShowRuleModal: bool});
            Utils.sendTrack('click', 'toggleRuleModal');
        } else if (idName === 'endModal') {
            Utils.sendTrack('click', 'closeEndModal');
            Native.navigation.closeWindow();
        }
    }

    @bind
    handleRecievePoint(id) {     //领取积分
        Utils.sendTrack('click', 'clickPoint_'+id);
        BaseRequest.getPointDraw(id).then((res) => {
            Utils.toast('领取成功');
            let TASKDATA = this.state.TASKDATA;
            TASKDATA.map((item, i) => {
                item.map((task, j) => {
                    if (task.id === id) {
                        task.status = 'REWARD';
                    }
                });
            });
            this.setState({TASKDATA: TASKDATA});
            Utils.sendTrack('click', 'clickPointSuccess_'+id);
        });
    }

    @bind
    handleRecieveCoupon(id) {   //领取优惠券
        Utils.sendTrack('click', 'clickCoupon_'+id);
        BaseRequest.getReward(id).then((res) => {
            Utils.toast('领取成功');
            let TASKDATA = this.state.TASKDATA;
            TASKDATA.map((item, i) => {
                item.map((task, j) => {
                    if (task.id === id) {
                        task.status = 'REWARD';
                    }
                });
            });
            this.setState({TASKDATA: TASKDATA});
            Utils.sendTrack('click', 'clickCouponSuccess_'+id);
        });
    }

    render() {
        const {TASKDATA, isShowRuleModal, currentTime, isShowEndModal} = this.state;
        let roundElem = '';
        if (TASKDATA.length) {
            roundElem = TASKDATA.map((item, i) => {
                let isOpen = false;
                if (i === 0) isOpen = true;
                return (<Round taskList={item}
                        isOpen={isOpen}
                        key={i}
                        indexLevel={i+1}
                        handleRecievePoint = {this.handleRecievePoint}
                        handleRecieveCoupon = {this.handleRecieveCoupon}
                        currentTime={currentTime}></Round>);
            });
        }
        return (
            <div>
                <div className="banner">
                    <img src={require('../../assets/images/banner.jpg')} className="main_img"/>
                    <img onClick={() => {this.handleModal('BoxRuleModal');}}
                        src={require('../../assets/images/rule-btn.png')} className="rule_img"
                    />
                </div>
                {roundElem}
                <Modal idName="BoxRuleModal"
                    isShowModal={isShowRuleModal}
                    handleModal={this.handleModal}
                    bodyElem={<div><p className='title'>活动规则</p><p className='num-text'>1. 活动有效期14天</p><p className='num-text'>2. 活动期间需要找货以完成活动任务</p><p className='num-text'>3. 活动积分奖励在此页面需要手动领取，过期作废</p><p className='num-text'>4. 活动积分分两周完成，第一周的完成情况不影响务</p></div>}
                    footElem={<div className='cancel'><img src={require('../../assets/images/cancle-modal.png')} /></div>}
                />
                {isShowEndModal && (
                    <Modal idName="endModal"
                        isShowModal={isShowEndModal}
                        handleModal={this.handleModal}
                        bodyElem={<div>你已领取活动奖励，你的<br/>任务已结束。</div>}
                        footElem={<div className="confirm">我知道了</div>}
                    />
                )}
            </div>
        );
    }
}

export default ViewSourceB;
