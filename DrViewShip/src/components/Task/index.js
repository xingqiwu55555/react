import { Component, h } from 'preact';
import { bind } from 'decko';

import './style.scss';

const $ = window.$;
const Utils = window.Utils;

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClick: true
        };
    }

    static defaultProps = {
        typeLfOneBg: require('../../assets/images/type-one.png'),
        typeLfTwoBg: require('../../assets/images/type-two.png'),
        typeLfThreeBg: require('../../assets/images/type-three.png'),
        // typeBtnOneBase: require('../../assets/images/recieve-gray-btn.png'),
        typeBtnTwoBase: require('../../assets/images/recieve-gray-btn.png'),
        typeBtnOver: require('../../assets/images/uncompleted.png'),
        typeBtnOneComplete: require('../../assets/images/complete.png'),
        typeBtnTwoComplete: require('../../assets/images/recieve-btn.png'),
        typeBtnTwoCompleted: require('../../assets/images/recieved-btn.png')
    }

    @bind
    handleRecieve(bool, type, id) {
        if (!bool) return;
        if (type === 'POINT') {
            if (this.state.isClick) {
                this.props.handleRecievePoint(id);
                this.setState({isClick: false});
            }
        } else if (type === 'COUPON') {
            if (this.state.isClick) {
                this.props.handleRecieveCoupon(id);
                this.setState({isClick: false});
            }
        }
    }

    initData(data) {
        const {
            taskData,
            typeLfOneBg,
            typeLfTwoBg,
            typeLfThreeBg,
            typeBtnOneBase,
            typeBtnTwoBase,
            typeBtnOver,
            typeBtnOneComplete,
            typeBtnTwoComplete,
            typeBtnTwoCompleted
        } = this.props;
        const rewardMessage = JSON.parse(taskData.rewardMessage);
        const status = taskData.status;
        let btnStyle = '';
        let cls = 'task';
        let cls_status = 'task-btn';
        let task_lf_text = '';
        let task_cen_text = '';
        let isClick = false;
        let typeLfBg = '';
        let typeBtnBg = '';
        switch (rewardMessage.rewardType) {
            case 'POINT':
                typeLfBg = typeLfOneBg;
                typeBtnBg = typeBtnTwoBase;
                cls = 'task task-type-one';
                task_lf_text = rewardMessage.rewardAmount+'<br/>积分';
                if (status === 'COMPLETED') {
                    typeBtnBg = typeBtnTwoComplete;
                    cls_status = 'task-btn task-btn-complete';
                    isClick = true;
                } else if (status === 'REWARD') {
                    typeBtnBg = typeBtnTwoCompleted;
                    cls_status = 'task-btn task-btn-reward';
                } else if (status === 'EXPIRED') {
                    typeBtnBg = typeBtnOver;
                    cls_status = 'task-btn task-btn-overtime';
                }
                break;
            case 'COIN':
                typeLfBg = typeLfTwoBg;
                cls = 'task task-type-two';
                
                if (status === 'COMPLETED' || status === 'REWARD') {
                    typeBtnBg = typeBtnOneComplete;
                    cls_status = 'task-btn task-btn-complete';
                } else if (status === 'EXPIRED') {
                    typeBtnBg = typeBtnOver;
                    cls_status = 'task-btn task-btn-overtime';
                }
                break;
            case 'COUPON':
                typeLfBg = typeLfThreeBg;
                typeBtnBg = typeBtnTwoBase;
                cls = 'task task-type-three';
                task_lf_text = rewardMessage.rewardAmount + '<br/>大礼包';
                if (status === 'COMPLETED') {
                    typeBtnBg = typeBtnTwoComplete;
                    cls_status = 'task-btn task-btn-complete';
                    isClick = true;
                } else if (status === 'REWARD') {
                    typeBtnBg = typeBtnTwoCompleted;
                    cls_status = 'task-btn task-btn-reward';
                    task_cen_text = rewardMessage.rewardDesc;
                } else if (status === 'EXPIRED') {
                    typeBtnBg = typeBtnOver;
                    cls_status = 'task-btn task-btn-overtime';
                }
                break;
        }
        if (typeBtnBg) {
            btnStyle = {'background-image': `url(${typeBtnBg})` };
        }
        return (
            <div className={cls}>
                <div className="task-lf"
                    style={{'background-image': `url(${typeLfBg})`}}
                    dangerouslySetInnerHTML={{__html: task_lf_text}}>
                </div>
                <div className="task-text">
                    <p>累计找货<span>{taskData.progressTarget}天</span></p>
                    <div>{task_cen_text}</div>
                </div>
                <div className={cls_status}
                    onClick={() => {this.handleRecieve(isClick, rewardMessage.rewardType, taskData.id);}}
                    style={btnStyle}
                >
                </div>
            </div>
        );
    }

    render() {
        const {taskData} = this.props;
        const rewardMessage = JSON.parse(taskData.rewardMessage);

        let taskElem = this.initData();
        return (
            <div>{ taskElem }</div>
        );
    }
}

export default Task;
