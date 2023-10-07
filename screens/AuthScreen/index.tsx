import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
//@ts-ignore
import Logo from "../../assets/logo.svg";

import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../constants/layouts";
const AuthScreen = () => {
  const navigation = useNavigation<StackNavigation>();
  return (
    <SafeAreaView className='h-screen justify-center  items-center w-full'>
      <View className='w-[311px] h-auto justify-between mx-auto items-center jsub'>
        <View className='mx-auto mb-10'>
          <Logo />
        </View>
        <Text className='text-primaryDark text-2xl font-bold'>
          Let’s get started!
        </Text>
        <Text className='w-[220px] text-primaryGray text-center tracking-[0.5px] mt-[9px]'>
          Login to enjoy the features we’ve provided, and stay healthy!
        </Text>
      </View>
      <View className='mt-[50px]'>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          className='bg-primary w-[263px] h-[56px] rounded-full justify-center items-center mb-[18px]'>
          <Text className='text-white font-semibold text-base'>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          className='w-[263px] h-[56px] border border-primary  rounded-full justify-center items-center '>
          <Text className='text-primary font-semibold text-base'>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
