import { View, Text, Button } from "react-native";
import * as React from "react";

export const PageDrawerTestHome = ({ navigation }: any) => {
  const openDrawer = () => {
    navigation.openDrawer();
    // navigation.closeDrawer();
    // navigation.toggleDrawer();
  };

  return (
    <View>
      <Text>PageDrawerTestHome</Text>
      <Button onPress={() => openDrawer()} title="OpenDrawer" />
    </View>
  );
};
