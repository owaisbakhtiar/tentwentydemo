import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieListScreen from "@src/screens/Watch/MoviesList/MovieListScreen";
import MovieDetailsScreen from "@screens/Watch/MovieDetailsScreen";

export type WatchStackParamList = {
  MovieList: undefined;
  MovieDetails: { movieId: number };
  // Add more screens here as needed
};

const Stack = createNativeStackNavigator<WatchStackParamList>();

const WatchStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MovieList" component={MovieListScreen} />
    <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
  </Stack.Navigator>
);

export default WatchStackNavigator;
