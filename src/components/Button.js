// @flow
import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

type Props = {
  title: string,
  onPress: () => {}
};

export default ({ title, onPress }: Props) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center"
  },
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
