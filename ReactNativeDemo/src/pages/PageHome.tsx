import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import * as React from "react";
import { NavigationScreenProp } from "react-navigation";
import _ from "lodash";
import { baseRouteConfigs } from "../route";
import { SSListItem } from "../components/SSListItem";

const listDatas = _.map(_.values(baseRouteConfigs), ({ title }) => ({
  title,
  url: title
}));

interface IHomeProps {
  navigation: NavigationScreenProp<{}>;
}

export class PageHome extends React.Component<IHomeProps> {
  render() {
    return (
      <View style={styles.container}>
        {listDatas.map(({ title, url }) => (
          <SSListItem
            key={title}
            title={title}
            onClickPress={() => this.props.navigation.navigate(url)}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: 400,
    flexDirection: "column"
  }
});
