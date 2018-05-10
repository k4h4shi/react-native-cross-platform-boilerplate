import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Home } from "../../src/components/home";

storiesOf("Home", module).add("Home", () => (
  <Home onButtonPress={action("onButtonPress")} />
));
