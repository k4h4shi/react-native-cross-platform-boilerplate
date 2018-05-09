// @flow
import React, { Component } from "react";
import { Text } from "react-native";
import { Button, CenteringView } from "../components";

type Props = {
  navigation: {
    navigate: string => {}
  }
};

export default class HomeScreen extends Component<Props> {
  render() {
    return (
      <CenteringView>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </CenteringView>
    );
  }
}
