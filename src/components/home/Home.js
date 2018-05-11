// @flow
import React, { Component } from "react";
import styled from "styled-components/primitives";
import { Button, CenteringView } from "../../components/common";

type Props = {
  onPressButton: () => void
};

const Home = ({ onPressButton }: Props) => (
  <CenteringView>
    <Title>Home Screen</Title>
    <Button title="Show samples" onPress={onPressButton} />
  </CenteringView>
);

const Title = styled.Text`
  font-size: 13px;
`;

export default Home;
