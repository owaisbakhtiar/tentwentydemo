import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BottomTabNavigator from "@navigation/BottomTabNavigator";

const RootNavigator = () => (
  <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </SafeAreaView>
  </SafeAreaProvider>
);

export default RootNavigator;
