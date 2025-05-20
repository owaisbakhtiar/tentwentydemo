import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieListScreen from "@src/screens/Watch/MoviesList";
import MovieDetailsScreen from "@src/screens/Watch/MovieDetails";
import SearchScreen from "@src/screens/Watch/SearchScreen";

export type WatchStackParamList = {
  MovieList: undefined;
  MovieDetails: { movieId: number };
  SearchScreen: undefined;
  // Add more screens here as needed
};

const Stack = createNativeStackNavigator<WatchStackParamList>();

const WatchStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MovieList" component={MovieListScreen} />
    <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
    <Stack.Screen name="SearchScreen" component={SearchScreen} />
  </Stack.Navigator>
);

export default WatchStackNavigator;
