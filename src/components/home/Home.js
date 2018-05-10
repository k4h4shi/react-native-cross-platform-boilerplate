// @flow
import React, { Component } from "react";
import { Text } from "react-native";
import { Button, CenteringView } from "../../components/common";

type Props = {
  onPressButton: () => void
};

const Home = ({ onPressButton }: Props) => (
  <CenteringView>
    <Text>Home Screen</Text>
    <Button title="Show samples" onPress={onPressButton} />
  </CenteringView>
);

export default Home;
