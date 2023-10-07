import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthScreen from "../../screens/AuthScreen";
import OnBoardingScreen from "../../screens/onBoardingScreen";
import LoginScreen from "../../screens/LoginScreen";
import RegisterScreen from "../../screens/RegisterScreen";
import ForgotPasswordScreen from "../../screens/ForgotPasswordScreen";
import VerificationScreen from "../../screens/verificationScreen";
import CreatePasswordScreen from "../../screens/CreatePasswordScreen";
import HomeScreen from "../../screens/Home";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../redux/hooks";

import Doctor from "../../screens/Doctor";
import Main from "../main";
import FindDoctors from "../../screens/FindDoctors";

export type ScreenNames = [
  "Doctor",
  "onBoarding",
  "Auth",
  "Login",
  "Register",
  "ForgotPassword",
  "Verification",
  "createPassword",
  "Main",
  "FindDoctors"
];
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const OnBoardingStack = () => {
  // console.log("s", isOnboarded);

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name='onBoarding'
        component={OnBoardingScreen}
      />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name='Auth'
        component={AuthScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name='Login'
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name='Register'
        component={RegisterScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name='ForgotPassword'
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name='Verification'
        component={VerificationScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name='createPassword'
        component={CreatePasswordScreen}
      />
    </Stack.Navigator>
  );
};

const MainStack = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name='Main'
          component={Main}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name='Doctor'
          component={Doctor}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name='FindDoctors'
          component={FindDoctors}
        />
      </Stack.Navigator>
    </>
  );
};

export const Layout = () => {
  const { isOnboarded, isLoggedIn } = useAppSelector((state) => state.auth);
  return (
    <NavigationContainer>
      {!isOnboarded ? (
        <OnBoardingStack />
      ) : !isLoggedIn ? (
        <AuthStack />
      ) : (
        <MainStack />
      )}
    </NavigationContainer>
  );
};
