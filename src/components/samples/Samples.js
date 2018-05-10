// @flow
import React, { Component } from "react";
import SampleList from "./SampleList";

type Props = {|
  samples: Array<{
    id: number,
    title: string,
    description: string
  }>
|};

const Samples = ({ samples }: Props) => <SampleList samples={samples} />;

export default Samples;
