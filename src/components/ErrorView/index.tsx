import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import COLORS from "@constants/colors";
import FONTS from "@constants/fonts";

interface ErrorViewProps {
  error: string;
  onRetry: () => void;
}

const ErrorView = ({ error, onRetry }: ErrorViewProps) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onRetry} activeOpacity={0.7}>
      <Text style={styles.errorText}>{error}</Text>
      <Text style={styles.retryText}>Tap to retry</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: COLORS.pink,
    textAlign: "center",
    fontFamily: FONTS.medium,
    fontSize: 16,
  },
  retryText: {
    color: COLORS.skyBlue,
    textAlign: "center",
    marginTop: 8,
    fontFamily: FONTS.medium,
  },
});

export default ErrorView;
