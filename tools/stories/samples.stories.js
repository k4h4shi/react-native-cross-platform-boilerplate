import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Samples, SampleList } from "../../src/components/samples";

const data = require("../data");

storiesOf("samples", module)
  .add("Samples", () => <Samples samples={data.samples} />)
  .add("SampleList", () => <SampleList samples={data.samples} />);
