import { Component, h } from 'preact';
import { bind } from 'decko';

import './style.scss';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    @bind
    handleModal() {
        this.props.handleModal(this.props.idName);
    }

    @bind
    bindleMaskModal(e) {
        const id = this.props.idName;
        if (e.target.id && (e.target.id === id || e.target.parentNode.id === id)) {
            this.handleModal();
        }
    }

    render() {
        let modalStatus = this.props.isShowModal ? {'display': 'block'} :{'display': 'none'};
        return (
            <div id={this.props.idName} className="utils-modal rule-modal" style={modalStatus}>
                <div className="utils-modal-mask">
                    <div className="utils-modal-con utils-modal-pop">
                        <div className="utils-modal-body">
                            {this.props.bodyElem}
                        </div>
                        <div className="utils-modal-footer" onClick={this.handleModal}>
                            {this.props.footElem}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
