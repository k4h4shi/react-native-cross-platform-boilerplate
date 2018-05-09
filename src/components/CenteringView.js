// @flow
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

type Props = { children: {} };

export default ({ children }: Props) => (
  <View style={styles.centering}>{children}</View>
);

const styles = StyleSheet.create({
  centering: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
