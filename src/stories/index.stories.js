import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { CenteringView, Button } from "../components/common";
import { SampleList } from "../components/sample";
import { HomeScreen, SamplesScreen } from "../screens";

storiesOf("components/common", module)
  .add("CenteringView", () => (
    <CenteringView>
      <Text>This text is centered.</Text>
    </CenteringView>
  ))
  .add("Button", () => <Button title="click me" onPress={action("onPress")} />);

storiesOf("components/sample", module).add("SampleList", () => (
  <SampleList
    samples={[
      { id: 0, title: "title", description: "description" },
      { id: 1, title: "title", description: "description" }
    ]}
  />
));

storiesOf("screens", module)
  .add("HomeScreen", () => <HomeScreen />)
  .add("SamplesScreen", () => <SamplesScreen />);
