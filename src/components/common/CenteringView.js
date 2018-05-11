// @flow
import React, { Component } from "react";
import styled from "styled-components/primitives";

type Props = { children: {} };

export default ({ children }: Props) => (
  <CenteringView>{children}</CenteringView>
);

const CenteringView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
