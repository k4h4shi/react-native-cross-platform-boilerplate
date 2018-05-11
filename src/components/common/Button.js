// @flow
import React, { Component } from "react";
import styled from "styled-components/primitives";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

type Props = {
  title: string,
  onPress: () => void
};

export default ({ title, onPress }: Props) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);

const ButtonText = styled.Text`
  background-color: transparent;
  border: solid 1.5px black;
  border-radius: 3px;
  padding: 6px;
  color: black;
`;

const ButtonContainer = styled.Touchable`
  align-items: center;
  justify-content: center;
`;

const styles = StyleSheet.create({
  button: {},
  title: {
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 3,
    borderWidth: 1.5,
    padding: 6,
    color: "black"
  }
});
