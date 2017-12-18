import { Component, h } from 'preact';
import { bind } from 'decko';

import './style.scss';
import Task from '../Task';

const $ = window.$;
const Utils = window.Utils;

class Round extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    static defaultProps = {

    };

    componentDidMount() {

    }

    render() {
        const {
            taskList,
            isOpen,
            currentTime,
            indexLevel,
            handleRecievePoint,
            handleRecieveCoupon
        } = this.props;
        let cls = "round round-active";
        let openDay = 0;
        if (isOpen || (taskList[0].available)) {
            cls = "round";
        } else {
            let dis = taskList[0].openTime - currentTime;
            openDay = Math.ceil(dis / 1000 / 60 / 60 / 24, 10);
        }
        return (
            <div className={cls}>
                <div className="round-title"
                    style={{'background-image': `url(${require("../../assets/images/yibiaopan.png")})`}}>
                    第{indexLevel}关任务
                </div>
                <div className="wrap" style={{'-webkit-box-orient':'vertical'}}>
                    <p className="wrap-text">{openDay}天后本关卡自动解锁</p>
                    <img src={require('../../assets/images/suo.png')} alt="" className="wrap-suo"/>
                </div>
                <p className="round-text">请在7天内完成本关任务</p>
                {
                    taskList.map((item, i) => {
                        return (
                            <Task taskData={item}
                                key={i}
                                handleRecievePoint={handleRecievePoint}
                                handleRecieveCoupon={handleRecieveCoupon}>
                            </Task>
                        );
                    })
                }
            </div>
        );
    }
}

export default Round;
