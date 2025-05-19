import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MovieListScreen = () => (
  <View style={styles.container}>
    <Text>Movie List Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MovieListScreen;
