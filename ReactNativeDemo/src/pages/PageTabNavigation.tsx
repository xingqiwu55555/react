import * as React from "react";
import { PageRNActivityIndicator } from "./PageRNActivityIndicator";
import { PageButton } from "./PageButton";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { appColor } from "../style/color";
import Icon from "react-native-vector-icons/Entypo";

const TabNavigator = createBottomTabNavigator(
  {
    ActivityIndicator: PageRNActivityIndicator,
    Button: PageButton
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        return (
          <Icon
            name={routeName === "Button" ? "archive" : "aircraft"}
            size={25}
            color={tintColor || ""}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: appColor.theme,
      inactiveTintColor: "gray"
    }
  }
);

export const PageTabNavigation = createAppContainer(TabNavigator);
