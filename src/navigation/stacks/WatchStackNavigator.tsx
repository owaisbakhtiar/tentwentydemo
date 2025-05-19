import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieListScreen from "@screens/Watch/MovieListScreen";

export type WatchStackParamList = {
  MovieList: undefined;
  // Add more screens here as needed
};

const Stack = createNativeStackNavigator<WatchStackParamList>();

const WatchStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MovieList" component={MovieListScreen} />
  </Stack.Navigator>
);

export default WatchStackNavigator;
