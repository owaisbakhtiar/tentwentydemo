import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "@screens/DashboardScreen";
import WatchStackNavigator from "@navigation/stacks/WatchStackNavigator";
import MediaLibraryScreen from "@screens/MediaLibraryScreen";
import MoreScreen from "@screens/MoreScreen";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import COLORS from "@constants/colors";
import FONTS from "@constants/fonts";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const insets = useSafeAreaInsets();

  const tabBarStyle = {
    backgroundColor: COLORS.darkPurple,
    height: Platform.OS === "ios" ? 75 : 75 + insets.bottom,
    borderTopLeftRadius: 27,
    borderTopRightRadius: 27,
    position: "absolute" as const,
    borderTopWidth: 0,
    overflow: "hidden" as const,
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === "ios" ? 0 : insets.bottom,
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string = "";
          switch (route.name) {
            case "Dashboard":
              iconName = "grid-outline";
              break;
            case "Watch":
              iconName = "play-circle-outline";
              break;
            case "Media Library":
              iconName = "folder-outline";
              break;
            case "More":
              iconName = "menu-outline";
              break;
          }
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.white,
        tabBarInactiveTintColor: COLORS.grayText,
        tabBarStyle,
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: FONTS.medium,
          fontSize: 11,
          marginBottom: Platform.OS === "android" ? 8 : 12,
        },
        tabBarIconStyle: {
          marginTop: 8,
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Watch" component={WatchStackNavigator} />
      <Tab.Screen name="Media Library" component={MediaLibraryScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
