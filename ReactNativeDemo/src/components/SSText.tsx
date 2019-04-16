import * as React from "react";
import { StyleSheet, Text } from "react-native";

interface ISSTextProps {
  style?: any;
}

export const SSText: React.SFC<ISSTextProps> = ({ style = {}, children }) => (
  <Text style={[styles.text, style]}>{children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    lineHeight: 22,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  }
});
