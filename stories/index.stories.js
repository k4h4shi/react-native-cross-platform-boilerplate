import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { HomeScreen, DetailsScreen } from "../src/screens";

storiesOf("screens", module)
  .add("HomeScreen", () => <HomeScreen />)
  .add("DetailsScreen", () => <DetailsScreen />);
