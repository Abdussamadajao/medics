import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationProp } from "@react-navigation/native";
import HomeScreen from "../../screens/Home";
import { Home } from "../../constants/icons";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../../screens/Profile";
import Message from "../../screens/Message";
import Schedule from "../../screens/Schedule";
export type BottomTabParamList = {
  Home: undefined;
  Profile: undefined;
  Message: undefined;
  Schedule: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      //@ts-ignore
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }: any) => {
          let icon: any;
          let rn = route.name;

          if (rn === "Home") {
            icon = focused ? "home" : "home-outline";
          } else if (rn === "Message") {
            icon = focused ? "mail" : "mail-outline";
          } else if (rn === "Schedule") {
            icon = focused ? "calendar" : "calendar-outline";
          } else if (rn === "Profile") {
            icon = focused ? "person" : "person-outline";
          }

          return <Ionicons name={icon} size={size} color={color} />;
        },

        tabBarActiveTintColor: "#199A8E",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        style: { height: 79 },
      })}>
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name='Home'
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name='Message'
        component={Message}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name='Schedule'
        component={Schedule}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name='Profile'
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default Main;
