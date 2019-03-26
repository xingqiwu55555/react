import * as React from "react";
import { PageRNActivityIndicator } from "./PageRNActivityIndicator";
import { PageButton } from "./PageButton";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { appColor } from "../style/color";
// import Ionicons from "react-native-vector-icons/Ionicons";

const TabNavigator = createBottomTabNavigator(
  {
    ActivityIndicator: PageRNActivityIndicator,
    Button: PageButton
  },
  {
    tabBarOptions: {
      activeTintColor: appColor.theme,
      inactiveTintColor: "gray"
    }
  }
);

export const PageTabNavigation = createAppContainer(TabNavigator);
