# preact、preact-router、axios的活动项目

```
cnpm install
```

```
npm run dev
```

目录划分

src

  -- assets    静态资源

  -- components  组件/木偶组件

  -- container      view/智能组件

  -- routes            路由配置

  index.js             入口文件

  index.ejs           模板文件

#### about router

`preact-router` 默认使用非hash方式的router   需要更改为hash方式的

1. npm install --save history

2. ```jsx
   import {h, Component} from 'preact';
   import {Router} from 'preact-router';
   // import hashHistory
   import createHashHistory from 'history/createHashHistory';

   import {bind} from 'decko';

   import Introduce from '../container/Introduce/index';
   import InformationFrom from '../container/InformationFrom/index';
   import TypesForm from '../container/TypesForm/index';
   import SubmitSuccess from '../container/SubmitSuccess/index';

   class Routes extends Component {
       /**
        * TODO router change 发送 pv, 改变title
        * @param e
        */
       @bind
       handleRouteChange(e) {

       }

       render() {
           return (
           	// 注册使用 hashHistory
               <Router onChange={this.handleRouteChange} history={createHashHistory()}>
                   <Introduce path="/"/>
                   <InformationFrom path="/form/information"/>
                   <TypesForm path="/form/types"/>
                   <SubmitSuccess path="/submitSuccess"/>
               </Router>
           );
       }
   }

   export default Routes;

   ```

#### about webpack

> 注: webpack.js = webpack.config.babel.js

1. `css|sass|less` loader & postcss , autoprefixer 默认 配置 `'last 2 versions, iOS >= 7' `  需要其他可以自行更改
2. 图片等静态资源默认小于1000kb用base64编码的形式存储在js中, 搜索 `url-loader` 可进行更改
3. 模板html 放在 `src/index.ejs` 中, webpack.js 中搜索`HtmlWebpackPlugin` 可自行更改, 后期考虑作出配置形式
4. port 不多说, 可以通过更改 start 参数来更改也可以通过修改 webpack.js 来修改
5.  `devServer.proxy` 代理转发  webpack.js 中搜索 `devServer` 修改 `proxy` 选项即刻





