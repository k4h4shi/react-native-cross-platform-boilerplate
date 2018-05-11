// @flow
import React, { Component } from "react";
import styled from "styled-components/primitives";
import { StyleSheet, View, Text } from "react-native";

type Props = {|
  samples: Array<{
    id: number,
    title: string,
    description: string
  }>
|};

const SampleList = ({ samples }: Props) =>
  samples.map(sample => (
    <Container key={sample.id}>
      <Propaty>id: {sample.id}</Propaty>
      <Propaty>title: {sample.title}</Propaty>
      <Propaty>description: {sample.description}</Propaty>
    </Container>
  ));

const Container = styled.View`
  margin: 5px;
  border: solid 1.5px black;
  border-radius: 3px;
  border-width: 1.5px;
  padding: 6px;
`;

const Propaty = styled.Text``;

export default SampleList;
