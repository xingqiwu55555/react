/**
 * Created by lichao on 2017/6/1.
 */
// 引入 fetch , fetch 注册于全局之上/window
import axios from 'axios';
import Promise from 'promise';
import {checkEnv, parseParam} from './utils';
import {hosts, sessionErrorCode} from '../config/host';

const fetch = window.fetch;

const _Native = window.Native;
const _Utils = window.Utils;
let defaultOptions = {
    headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        'Accept': 'application/json'
    },
    credentials: '*'
};
let rootPath = hosts[checkEnv()].xhr;
let sso = {
    session: null,
    queue: [],
    isDoing: false,
    errorCount: 0
};
let ssoQueue = () => {
    if (sso.queue.length > 0) {
        while (sso.queue.length > 0) {
            let item = sso.queue.shift();
            item.updateCount = 1;
            _fetch(item.url, item, 'update session').then((res) => {
                item.resolve(res);
            }, item.reject);
        }
    }
};

const requestSuccess = (res, options, resolve, reject) => {
    if (!options.autoCheck) {
        sso.errorCount = 0;
        resolve(res.content);
        return;
    }
    if (res.status.toLowerCase() === 'ok') {
        sso.errorCount = 0;
        resolve(res.content);
    } else {
        // sessionCode 必须为string ???
        if (!sessionErrorCode || sessionErrorCode.length === 0) {
            throw new Error('sessionErrorCode must be defined in host/config!');
        }
        // 判断是否为下线 120001
        // res.errorCode = 120001;
        if (sessionErrorCode.indexOf(res.errorCode + '') < 0) {
            reject(res);
            if (res.errorMsg) {
                _Utils.toast(res.errorMsg);
            } else {
                _Utils.toast('系统异常，请稍后重试');
            }
            return;
        }
        sessionErrorCode.forEach((values) => {
            if (values.toString() === res.errorCode.toString() && !sso.updateCount) {
                sso.queue.push(Object.assign({}, options, {url: options.url}, {resolve, reject}));
                if (sso.errorCount < 2) {
                    sso.errorCount++;
                    sso.isDoing = true;
                    _Native.getSession({
                        code: res.errorCode,
                        callback(resp) {
                            if (resp.sid && resp.st) {
                                sso.session = {
                                    sid: resp.sid,
                                    st: resp.st
                                };
                                ssoQueue();
                            } else {
                                reject(res);
                                _Utils.toast('请重新登录');
                            }
                            sso.isDoing = false;
                        }
                    });
                } else if (sso.errorCount >= 2) {
                    _Utils.toast('请重新登录');
                }
                /* if (!sso.isDoing) {
                        ssoQueue();
                    } */
            } else {
                reject(res);
                res.errorMsg ? _Utils.toast(res.errorMsg) : _Utils.toast('系统异常，请稍后重试');
            }
        });
    }
};

let _fetch = (url, options, index) => {
    let sessionObj = _Native.getSessionInfo();
    // 需要发送的数据, 不破坏数据原始性
    let opts = {
        method: options.method,
        credentials: options.credentials
    };
    // 针对上传文件做单独操作
    if (!(options.data instanceof FormData)) {
        // 自动添加SESSION
        if (options.needLogin) {
            Object.assign(options.data, {
                sid: sessionObj.sid,
                st: sessionObj.st
            });
        }
        // 设置header
        opts.headers = options.headers;
        if (options.method.toLowerCase() === 'get') {
            opts.url = options.url || url + '?' + parseParam(options.data);
            opts.data = null;
        } else {
            opts.url = url;
            opts.data = parseParam(options.data);
        }
    } else {
        opts.url = url;
        opts.data = options.data;
    }
    return new Promise((resolve, reject) => {
        axios(opts).then((response) => {
            return Promise.resolve(response.data);
        }).then((resp) => {
            requestSuccess(resp, options, resolve, reject);
        }, (res) => {
            console.log('error1', res);
            _Utils.toast('系统异常，请稍后重试');
            reject(res);
        });
    });
};

export default ({url, data = {}, method = 'get', needLogin = true, autoCheck = true, header, host = 'DEF'}) => {
    method = method.toLowerCase();

    let options = {
        method,
        credentials: defaultOptions.credentials,
        autoCheck,
        needLogin
    };

    url = url.indexOf('upaiyun.com') > -1 ? url : rootPath[host] + url;

    options.data = data;

    header ? (options.headers = header) : (options.headers = defaultOptions.headers);

    return _fetch(url, options);
};
