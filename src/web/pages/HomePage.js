// @flow
import React, { Component } from "react";
import { withRouter } from "react-router";
import { Text } from "react-native";
import { Button, CenteringView } from "../../components/common";

type Props = {
  history: {
    push: string => void
  }
};

class HomePage extends Component<Props> {
  render() {
    return (
      <CenteringView>
        <Text>Home Screen</Text>
        <Button
          title="Show samples"
          onPress={() => {
            this.props.history.push("/samples");
          }}
        />
      </CenteringView>
    );
  }
}

export default withRouter(HomePage);
