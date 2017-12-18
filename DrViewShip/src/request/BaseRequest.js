import xhr from '../utils/xhr';

export default new class {
    login() {
        return xhr({
            url: '/sso/common/web/mobile/login-by-code.do',
            host: 'www',
            needLogin: false,
            auto: false,
            data: {
                mobile: 14500000517,
                password:123456,
                domainId:1,
                appClientId:207,
                isPwdEncrypt:0,
                code:8888,
                codeType:1
            },
            method: 'post'
        });
    }
    
    getDetail(code) {  //获取活动详情
        return xhr({
            url: '/mobile/activity/task/detail',
            method: 'POST',
            needLogin: true,
            data: {
                keyCodes: code
            }
        });
    }

    getPointDraw(id) {  //领取积分
        return xhr({
            url: '/web/activity/task/reward-by-id',
            method: 'POST',
            data: {
                taskId: id
            }
        });
    }

    getReward(id) {  //领取奖品
        return xhr({
            url: '/mobile/activity/task/reward',
            method: 'POST',
            data: {
                taskId: id
            }
        });
    }

    purchaseList(code) {  //我的奖品记录
        return xhr({
            url: '/web/biz/' + code + '/purchase-list',
            method: 'POST'
        });
    }

    exchangeList(code) {  //我的奖品记录
        return xhr({
            url: '/web/biz/' + code + '/exchange-list',
            method: 'POST'
        });
    }

    exchange(code, id) {  //立即兑换
        return xhr({
            url: '/web/biz/' + code + '/exchange',
            method: 'POST',
            data: {
                productId: id
            }
        });
    }
};
