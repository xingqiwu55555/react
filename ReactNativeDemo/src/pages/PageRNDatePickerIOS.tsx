import { DatePickerIOS, View, StyleSheet } from "react-native";
import * as React from "react";
import { SSText } from "../components/SSText";
import { SSTable } from "../components/SSTable";

const propsTableData = [{
  name: "date",
  type: "Date",
  default: "",
  isRequire: "true",
  desc: "当前被选中的日期",
}, {
  name: "onDateChange",
  type: "function",
  default: "",
  isRequire: "true",
  desc: "日期/时间变化的监听函数。当用户修改日期或时间时调用此回调函数。唯一的参数是一个日期对象，表示新的日期和时间。",
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

interface IPageRNDatePickerIOSState {
  chosenDate: Date;
}

export class PageRNDatePickerIOS extends React.Component<
  any,
  IPageRNDatePickerIOSState
> {
  state = { chosenDate: new Date() };

  render() {
    return (
      <View style={styles.container}>
        <SSText>
          使用DatePickerIOS来在 iOS
          平台上渲染一个日期/时间选择器。这是一个受约束的(Controlled)组件，所以你必须监听onDateChange回调函数并且及时更新date属性来使得组件更新，否则用户的修改会立刻被撤销来确保当前显示值和props.date一致。
        </SSText>
        <SSTable data={propsTableData}></SSTable>
        <View style={styles.flex}>
          <DatePickerIOS
            date={this.state.chosenDate}
            onDateChange={(newDate: Date) =>
              this.setState({ chosenDate: newDate })
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
  },
  flex: {
    display: "flex",
    justifyContent: "center"
  }
});
