import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import * as React from "react";

interface IListItemProps {
  title: string;
  onClickPress: any;
}

export const SSListItem = ( { title, onClickPress }: IListItemProps) => (
  <TouchableHighlight
    onPress={onClickPress}
    underlayColor="white"
    style={styles.item}
  >
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  item: {
    width: "100%",
    backgroundColor: "#fff",
    marginBottom: 15,
    shadowColor: "rgba(26,26,26,.1)",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    height: 50,
  },
  text: {
    fontSize: 16,
    color: "#000",
    paddingLeft: 10,
    lineHeight: 50,
  }
});
