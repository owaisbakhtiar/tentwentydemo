import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MediaLibraryScreen = () => (
  <View style={styles.container}>
    <Text>Media Library Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MediaLibraryScreen;
