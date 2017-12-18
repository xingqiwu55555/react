import { Component, h } from 'preact';
import { bind } from 'decko';

import './style.scss';

const $ = window.$;
const Utils = window.Utils;

class PrizeBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClick: true
        };
    }

    static defaultProps = {
        
    };

    @bind
    handleExchange(id, price, dec) {
        if (price >= this.props.coinNumber) {
            if (this.state.isClick) {
                this.props.handleExchange(id, dec);
                this.setState({isClick: false});
            }
        }
    }

    render() {
        const {goodsList, coinNumber, handleExchange, exchangeId} = this.props;
        let goodsElem = '';
        if (goodsList.length) {
            goodsElem = goodsList.map((item, i) => {
                let cls = '';
                let cls_btn = 'prize-btn ';
                let btn_text = '立即兑换';
                let description = JSON.parse(item.description);
                let dec = description.showDesc;
                if (i === 1) {
                    cls = 'prize-item-margin';
                }
                if (item.price <= coinNumber) {
                    cls_btn = 'prize-btn prize-btn-active';
                }
                if (exchangeId && exchangeId === item.productId) {
                    cls += 'prize-item-active';
                    cls_btn = 'prize-btn';
                    btn_text = '已兑换';
                    dec = description.exchangedDesc;
                }
                return (
                    <div className={"prize-item " + cls}
                        key={i}
                        style={{'background-image': `url(${require("../../assets/images/prize-bg.png")})`}}
                    >
                        <p className="prize-name">{dec}</p>
                        <p className="prize-dec">需{item.price}张兑换券</p>
                        <div className={cls_btn}
                            onClick={() => {this.handleExchange(item.productId, item.price, description.exchangedDesc);}}
                        >{btn_text}</div>
                    </div>
                );
            });
        }
        return (
            <div className="prize">
                {goodsElem}
            </div>
        );
    }
}

export default PrizeBox;
