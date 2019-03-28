import * as React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { PageHome } from "./pages/PageHome";
import { StyleSheet, View, Text } from "react-native";
import { baseRouteConfigs } from "./route";
import _ from "lodash";
import { Component } from "react";
import { appColor } from "./style/color";
import Icon from "react-native-vector-icons/FontAwesome5";

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: appColor.theme
  },
  headerTitleStyle: {
    color: "#fff"
  }
});

interface IBaseConfig {
  screen: Component;
  title: string;
}

const unfoldBaseRouteConfigs = _.mapValues(
  baseRouteConfigs,
  ({ screen, title }: IBaseConfig) => ({
    screen,
    navigationOptions: {
      title,
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.headerTitleStyle,
      headerBackTitleStyle: styles.headerTitleStyle,
      headerTintColor: "white"
    }
  })
);

const AppNavigation = createStackNavigator(
  {
    Home: {
      screen: PageHome,
      navigationOptions: {
        title: "Home",
        headerBackTitle: "back",
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
        headerTintColor: "white",
        headerLeft: (
          <Icon
            name="users-cog"
            size={24}
            color="#fff"
            style={{ marginLeft: 20 }}
          />
        )
      }
    },
    ...unfoldBaseRouteConfigs
  },
  {
    initialRouteName: "Home",
    cardStyle: {
      backgroundColor: appColor.body
    }
  }
);

export const App = createAppContainer(AppNavigation);
