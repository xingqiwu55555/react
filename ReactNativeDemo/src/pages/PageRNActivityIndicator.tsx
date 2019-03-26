import { View, StyleSheet, ActivityIndicator } from "react-native";
import * as React from "react";
import { SSText } from "../components/SSText";
import { SSTable } from "../components/SSTable";

const propsTableData = [{
  name: "animating",
  type: "boolean",
  default: "true",
  isRequire: "false",
  desc: "是否要显示指示器动画",
}, {
  name: "color",
  type: "string",
  default: "grey",
  isRequire: "false",
  desc: "滚轮的前景颜色",
}, {
  name: "size",
  type: "enum('small', 'large'), number",
  default: "small",
  isRequire: "false",
  desc: "指示器的大小。目前只能在 Android 上设定具体的数值",
}, {
  name: "hidesWhenStopped",
  type: "boolean",
  default: "true",
  isRequire: "false",
  desc: "在animating为 false 的时候，是否要隐藏指示器（默认为 true）。如果animating和hidesWhenStopped都为 false，则显示一个静止的指示器",
}];

export class PageRNActivityIndicator extends React.Component<any> {
  state = {
    animating: true,
    color: "#0000ff",
  };

  render() {
    return (
      <View>
        <SSText>显示一个圆形的 loading 提示符号</SSText>
        <SSTable data={propsTableData}></SSTable>
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator animating={true} size="large" color="#0000ff" />
          <ActivityIndicator size="small" color="#00ff00" />
          <ActivityIndicator size="large" color="#0000ff" />
          <ActivityIndicator size="small" color="#00ff00" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});
