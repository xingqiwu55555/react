import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";

interface IPropsTableColumn {
  title: string;
  dataIndex: string;
  width?: number;
}

const defaultColumns: IPropsTableColumn[] = [
  {
    title: "属性名",
    dataIndex: "name",
    width: 100,
  },
  {
    title: "类型",
    dataIndex: "type",
    width: 70,
  },
  {
    title: "默认值",
    dataIndex: "default",
  },
  {
    title: "是否必传",
    dataIndex: "isRequire",
    width: 70,
  },
  {
    title: "描述",
    dataIndex: "desc",
    width: 140,
  }
];

const DEFAULT_HEIGHT = "auto";
const DEFAULT_COLUMN_WIDTH = 80;

interface IPropsTableData {
  name: string;
  type: string;
  default: string;
  isRequire: string;
  desc: string;
}

interface ISSTableProps {
  data: IPropsTableData[];
  height?: number;
  columnWidth?: any;
  columns?: any;
  renderCell?: (cellData: any, col: any) => void;
}

export class SSTable extends Component<ISSTableProps> {
  static defaultProps = {
    columns: defaultColumns,
    data: [],
    columnWidth: DEFAULT_COLUMN_WIDTH,
    height: DEFAULT_HEIGHT,
    renderCell: undefined
  };

  _renderCell(cellData: any, col: IPropsTableColumn) {
    let style = {
      width: col.width || this.props.columnWidth || DEFAULT_COLUMN_WIDTH
    };
    return (
      <View key={col.dataIndex} style={[styles.cell, style]}>
        <Text>{cellData}</Text>
      </View>
    );
  }

  _renderHeader() {
    const { columns, columnWidth } = this.props;
    return columns.map((col: IPropsTableColumn, index: number) => {
      let style = { width: col.width || columnWidth || DEFAULT_COLUMN_WIDTH };
      return (
        <View key={index} style={[styles.headerItem, style]}>
          <Text>{col.title}</Text>
        </View>
      );
    });
  }

  _renderRow(rowData: any, index: number) {
    const { columns, renderCell = this._renderCell.bind(this) } = this.props;
    return (
      <View key={index} style={styles.row}>
        {columns.map((col: IPropsTableColumn) => renderCell(rowData[col.dataIndex], col))}
      </View>
    );
  }

  render() {
    const { data, height } = this.props;
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={[styles.contentContainer, { height }]}
        horizontal={true}
        bounces={false}
      >
        <View>
          <View style={styles.header}>{this._renderHeader()}</View>
          <ScrollView
            style={styles.dataView}
            contentContainerStyle={styles.dataViewContent}
          >
            {data.map((rowData: IPropsTableData, index: number) =>
              this._renderRow(rowData, index)
            )}
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
  },
  contentContainer: {
  },
  header: {
    flexDirection: "row"
  },
  headerItem: {
    minHeight: 30,
    width: DEFAULT_COLUMN_WIDTH,
    backgroundColor: "#efefef",
    borderRightWidth: 1,
    borderRightColor: "#dfdfdf",
    alignItems: "center",
    justifyContent: "center"
  },
  dataView: {
    flexGrow: 1,
    width: "100%",
  },
  dataViewContent: {},
  row: {
    flexDirection: "row",
    backgroundColor: "#fbfbfb",
    borderBottomWidth: 1,
    borderBottomColor: "#dfdfdf"
  },
  cell: {
    minHeight: 25,
    width: DEFAULT_COLUMN_WIDTH,
    backgroundColor: "transparent",
    borderRightWidth: 1,
    borderRightColor: "#dfdfdf",
    alignItems: "center",
    justifyContent: "center"
  }
});
