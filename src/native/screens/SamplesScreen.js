// @flow
import React, { Component } from "react";
import { Samples } from "../../components/samples";
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
    return <Samples samples={samples} />;
  }
}
