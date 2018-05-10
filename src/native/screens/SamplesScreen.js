// @flow
import React, { Component } from "react";
import { View, Text } from "react-native";
import { CenteringView } from "../../components/common";
import { SampleList } from "../../components/sample";
import * as SampleApi from "../../apis/SampleApi";

type State = {
  samples: Array<SampleApi.Model>
};

type Props = {
  navigation: {
    navigate: string => void
  }
};

export default class SamplesScreen extends Component<Props, State> {
  state = {
    samples: []
  };

  componentWillMount() {
    SampleApi.getAll().then(samples => {
      this.setState({ samples });
    });
  }

  render() {
    const { samples } = this.state;
    return (
      <CenteringView>
        <SampleList samples={samples} />
      </CenteringView>
    );
  }
}
