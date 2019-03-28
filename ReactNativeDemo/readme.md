# ReactNativeDemo

## Description

- 练习这个项目的初衷是伟大的，至于能不能完成这个练习项目那是后话
- 此练习项目没什么特别的说明，react-native-cli 和一些基础库，库名 package.json 里都有罗列
- 前面有说这个项目的初衷是伟大的：过一遍 react-native 提供的所有基础组件，把示例和说明都理清楚，也方便日后查看说明。这里使用了别人的写好的 [react-native-simple-table](https://github.com/Jeepeng/react-native-simple-table) 组件，只是该组件未提供 types。所以我这里边 copy 过来，然后加上了 type。
- 项目中用到了 react-navigation router 库，请注意版本
- 此项目只在 mac xcode 提供的模拟器上运行过，所以注意安装 xcode


## How to start

1. npm install

2. npm run ios

   项目启动过程中会有打开新的终端，输入日志，请不要关闭终端。


## Issues

1. 如果一定要选 react-navigation router 库，请一定要按照官网文档的[安装步骤](https://reactnavigation.org/docs/zh-Hans/getting-started.html);

2. react-native 在启动中，安装&引用了任何库，会报错，报错的原因我还在看文档去理解它的原理，解决方法便是 删掉node_modules，重装重启。

3. node server

4. PageTabNavigation 页面中引入了 [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) 库，[图标](https://oblador.github.io/react-native-vector-icons/) 引入该库可能会有一些问题，下面是一些引入步骤和一些解决方案，且结合两个教程一起完成：
    - [链接一](https://juejin.im/post/5a40f8cb6fb9a0452936ffbc)
    - [链接二](https://www.jianshu.com/p/43b0e4d58c1f)
    
   如果完成安装后，引入依然报找不到图标的错，请关掉模拟器、停止 node server，删掉 ios 目录下的 build 目录，然后重启。

5. 在 PageTabNavigation 页面，有两个导航，如下：

    ```
    const TabNavigator = createBottomTabNavigator(
      {
        ActivityIndicator: PageRNActivityIndicator,
        Button: PageButton
      },
    );
    ```
    如果我这么写，便会导致 App 中添加的 createStackNavigator 导航中 ActivityIndicator 和 Button 无法跳转。这应该是 react-navigation 库做的限制，限制的原因有兴趣的可以搜索下。
