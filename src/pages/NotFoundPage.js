// @flow
import React, { Component } from "react";
import { Text } from "react-native";
import { Button, CenteringView } from "../components/common";

type Props = {};

export default class NotFoundPage extends Component<Props> {
  render() {
    return (
      <CenteringView>
        <Text>Not Found</Text>
      </CenteringView>
    );
  }
}
