import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MoreScreen = () => (
  <View style={styles.container}>
    <Text>More Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MoreScreen;
