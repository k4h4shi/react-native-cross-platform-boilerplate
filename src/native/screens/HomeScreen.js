// @flow
import React, { Component } from "react";
import { Text } from "react-native";
import { Button, CenteringView } from "../../components/common";

type Props = {
  navigation: {
    navigate: string => void
  }
};

export default class HomeScreen extends Component<Props> {
  render() {
    return (
      <CenteringView>
        <Text>Home Screen</Text>
        <Button
          title="Show samples"
          onPress={() => this.props.navigation.navigate("Samples")}
        />
      </CenteringView>
    );
  }
}
