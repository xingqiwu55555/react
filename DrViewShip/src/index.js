import {h, render} from 'preact';
// import VConsole from 'vconsole';

import Router from './routes/index';

import BaseRequest from './request/BaseRequest';
import './assets/styles/base.scss';

const FastClick = require('fastclick');

// new VConsole();

FastClick.attach(document.body);

let root;
const Utils = window.Utils;

function init() {
    root = render(<Router/>, document.getElementById('root'), root);
    window.location.replace('#' + Utils.getUrlParams().hash);
}

window.Utils.init({
    baseId: 'DriverActivity',
    pageId: 'ViewSource',
    autoSendPv: true,
    debug: true,
    needLogin: true,
    sessionErrorCode: ['120001'],
    callback: init
});

if (process.env.NODE_ENV === 'development') {
    require('preact/devtools');
    BaseRequest.login().then((res) => {
        window.Native.setSession({'sid': res.id, 'st': res.token});
    });
}

export default Router;