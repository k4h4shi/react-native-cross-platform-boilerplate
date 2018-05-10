// @flow
import React, { Component } from "react";
import { Home } from "../../components/home";

type Props = {
  navigation: {
    navigate: string => void
  }
};

export default class HomeScreen extends Component<Props> {
  render() {
    return (
      <Home onPressButton={() => this.props.navigation.navigate("Samples")} />
    );
  }
}
