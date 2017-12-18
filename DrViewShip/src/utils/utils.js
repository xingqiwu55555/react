export const checkEnv = () => {
    /*
     判断hostname
     开发环境: 判断 process.env.NODE_ENV 是否为 'development';
     测试环境： http://dev.s.56qq.cn/    test
     预发布：   https://pub.56qq.cn/   https://pub.56qq.com/   publish
     线上环境： https://s.56qq.com/ https://s.56qq.cn/    online
     */
    let env = '';
    let host = window.location.hostname;

    if (process.env.NODE_ENV === 'development') {
        return 'dev';
    }

    // host = 's.56qq.com';

    switch (host) {
        case 'dev.s.56qq.com':
            env = 'test';
            break;
        case 'dev.s.56qq.cn':
            env = 'test';
            break;
        case 'pub.56qq.cn':
            env = 'publish';
            break;
        case 'pub.56qq.com':
            env = 'publish';
            break;
        case 's.56qq.com':
            env = 'online';
            break;
        case 's.56qq.cn':
            env = 'online';
            break;
        default:
            env = 'test';
    }
    return env;
};

export const parseParam = (param) => {
    if (param) {
        let arr = [];
        for (let key in param) {
            if (param[key] === undefined) {
                param[key] = '';
            }
            arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(param[key]));
        }
        return arr.join('&');
    }
    return '';
};
