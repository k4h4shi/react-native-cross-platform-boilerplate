import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { CenteringView, Button } from "../components";
import { HomeScreen, DetailsScreen } from "../screens";

storiesOf("components", module)
  .add("CenteringView", () => (
    <CenteringView>
      <Text>This text is centered.</Text>
    </CenteringView>
  ))
  .add("Button", () => <Button title="click me" onPress={action("onPress")} />);

storiesOf("screens", module)
  .add("HomeScreen", () => <HomeScreen />)
  .add("DetailsScreen", () => <DetailsScreen />);
