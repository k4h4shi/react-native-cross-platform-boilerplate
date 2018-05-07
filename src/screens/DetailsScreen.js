// @flow
import React, { Component } from "react";
import { View, Text, Button } from "react-native";

type Props = {
  navigation: {
    navigate: string => {}
  }
};

export default class DetailsScreen extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}
