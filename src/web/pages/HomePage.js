// @flow
import React, { Component } from "react";
import { Text } from "react-native";
import { Button, CenteringView } from "../../components/common";

type Props = {
  navigation: {
    navigate: string => void
  }
};

export default class HomePage extends Component<Props> {
  render() {
    return (
      <CenteringView>
        <Text>Home Screen</Text>
        <Button title="Show samples" onPress={() => {}} />
      </CenteringView>
    );
  }
}
