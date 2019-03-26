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
