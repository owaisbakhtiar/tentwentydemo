import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieListScreen from "@src/screens/Watch/MoviesList/MovieListScreen";
import MovieDetailsScreen from "@src/screens/Watch/MovieDetails/MovieDetailsScreen";
import GetTicketsScreen from "@src/screens/Watch/GetTicketsScreen";

export type WatchStackParamList = {
  MovieList: undefined;
  MovieDetails: { movieId: number };
  GetTickets: { movieId: number; title: string; releaseDate: string };
  // Add more screens here as needed
};

const Stack = createNativeStackNavigator<WatchStackParamList>();

const WatchStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MovieList" component={MovieListScreen} />
    <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
    <Stack.Screen name="GetTickets" component={GetTicketsScreen} />
  </Stack.Navigator>
);

export default WatchStackNavigator;
