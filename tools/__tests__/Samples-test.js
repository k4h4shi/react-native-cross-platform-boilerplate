// __tests__/App-test.js
import React from "react";
import data from "../data";
import { Samples } from "../../src/components/samples";

import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<Samples samples={data.samples} />).toJSON();
  expect(tree).toMatchSnapshot();
});
