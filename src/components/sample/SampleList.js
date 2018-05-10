// @flow
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

type Props = {|
  samples: Array<{
    id: number,
    title: string,
    description: string
  }>
|};

export default ({ samples }: Props) =>
  samples.map(sample => (
    <View style={styles.container} key={sample.id}>
      <Text>id: {sample.id}</Text>
      <Text>title: {sample.title}</Text>
      <Text>description: {sample.description}</Text>
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 3,
    borderWidth: 1.5,
    padding: 6
  }
});
