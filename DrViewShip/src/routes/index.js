import {h, Component} from 'preact';
import {Router} from 'preact-router';
import createHashHistory from 'history/createHashHistory';

import {bind} from 'decko';

import ViewSourceA from '../container/ViewSourceA';
import ViewSourceB from '../container/ViewSourceB';

class Routes extends Component {
    /**
     * TODO router change 发送 pv, 改变title
     * TODO 页面回到顶部
     * @param e
     */
    @bind
    handleRouteChange(e) {
        document.querySelector('html').scrollTop = 0;
    }

    render() {
        return (
            <Router onChange={this.handleRouteChange} history={createHashHistory()}>
                <ViewSourceA path="/viewsourcea"/>
                <ViewSourceB path="/viewsourceb"/>
            </Router>
        );
    }
}

export default Routes;
