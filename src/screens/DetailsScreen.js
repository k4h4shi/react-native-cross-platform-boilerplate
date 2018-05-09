// @flow
import React, { Component } from "react";
import { View, Text } from "react-native";
import { CenteringView } from "../components";

type Props = {
  navigation: {
    navigate: string => {}
  }
};

export default class DetailsScreen extends Component<Props> {
  render() {
    return (
      <CenteringView>
        <Text>Details Screen</Text>
      </CenteringView>
    );
  }
}
