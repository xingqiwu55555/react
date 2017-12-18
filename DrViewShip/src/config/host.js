/**
 * Created by lichao on 2017/6/1.
 */

export const hosts = {
    dev: {
        xhr: {
            POINT: 'http://dev.point.56qq.com',
            DEF: 'http://activity.qa-ag.56qq.com',
            www: 'http://dev.www.56qq.com'
        }
    },
    test: {
        xhr: {
            POINT: 'http://dev.point.56qq.com',
            DEF: 'http://activity.qa-ag.56qq.com',
            www: 'http://dev.www.56qq.com'
        }
    },
    online: {
        xhr: {
            POINT: 'https://point.56qq.com',
            DEF: 'https://activity.56qq.com'
        }
    }
};

// 下线code
export const sessionErrorCode = ['120001'];
