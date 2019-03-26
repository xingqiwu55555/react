import { Button, View, Text } from "react-native";
import * as React from "react";

export class PageDetail extends React.Component<any> {
  render() {
    return (
      <View>
        <Text>detail</Text>
        <Button
          title="Go back home"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
