import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BottomTabNavigator from "@navigation/BottomTabNavigator";
import GetTicketsDatesScreen from "@screens/Tickets/TicketsDates";
import SelectSeatsScreen from "@screens/Tickets/SelectSeats";

const Stack = createNativeStackNavigator();

const RootNavigator = () => (
  <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
          <Stack.Screen name="GetTickets" component={GetTicketsDatesScreen} />
          <Stack.Screen name="SelectSeats" component={SelectSeatsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  </SafeAreaProvider>
);

export default RootNavigator;
