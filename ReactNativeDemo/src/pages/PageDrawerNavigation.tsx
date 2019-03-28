import * as React from "react";
import { createAppContainer, createDrawerNavigator } from "react-navigation";
import { PageDrawerTestHome } from "./PageDrawerTestHome";
import { PageDrawerTestNot } from "./PageDrawerTestNot";
import Icon from "react-native-vector-icons/Entypo";
import { appColor } from "../style/color";

const DrawerNavigator = createDrawerNavigator(
  {
    DrawerTestHome: {
      screen: PageDrawerTestHome,
      navigationOptions: {
        drawerIcon: ({ tintColor, focused }: any) => (
          <Icon
            name={focused ? "archive" : "aircraft"}
            size={20}
            style={{ color: tintColor }}
          />
        ),
        title: "DrawerTestHome1"
      }
    },
    DrawerTestNot: {
      screen: PageDrawerTestNot,
      navigationOptions: {
        drawerIcon: ({ tintColor, focused }: any) => (
          <Icon
            name={focused ? "archive" : "aircraft"}
            size={20}
            style={{ color: tintColor }}
          />
        ),
        title: "DrawerTestNot2"
      }
    }
  },
  {
    drawerPosition: "right",
    drawerWidth: 240,
    drawerBackgroundColor: "#fff",
    initialRouteName: "DrawerTestHome",
    contentOptions: {
      activeTintColor: appColor.theme,
      activeBackgroundColor: appColor.body,
      inactiveTintColor: "#000",
      inactiveBackgroundColor: "#fff",
    }
  }
);

export const PageDrawerNavigation = createAppContainer(DrawerNavigator);
