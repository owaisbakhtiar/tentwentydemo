import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieListScreen from "@src/screens/Watch/MoviesList/MovieListScreen";
import MovieDetailsScreen from "@src/screens/Watch/MovieDetails/MovieDetailsScreen";
import GetTicketsDatesScreen from "@src/screens/Tickets/TicketsDates/GetTicketsDates";
import SelectSeatsScreen from "@src/screens/Tickets/SelectSeats/SelectSeatsScreen";

export type WatchStackParamList = {
  MovieList: undefined;
  MovieDetails: { movieId: number };
  GetTickets: { movieId: number; title: string; releaseDate: string };
  SelectSeats: {
    movieId: number;
    title: string;
    date: string;
    time: string;
    hall: string;
    price: number;
  };
  // Add more screens here as needed
};

const Stack = createNativeStackNavigator<WatchStackParamList>();

const WatchStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MovieList" component={MovieListScreen} />
    <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
    <Stack.Screen name="GetTickets" component={GetTicketsDatesScreen} />
    <Stack.Screen name="SelectSeats" component={SelectSeatsScreen} />
  </Stack.Navigator>
);

export default WatchStackNavigator;
