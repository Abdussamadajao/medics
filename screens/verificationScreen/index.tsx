import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
//@ts-ignore
import Chevronleft from "../../assets/chevronleft";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useTimeout } from "../../utils/useTimeout";
import { StackNavigation } from "../../constants/layouts";

const NUMBER_OF_INPUTS = 4;

const VerificationScreen = () => {
  const navigation = useNavigation<StackNavigation>();
  const [values, setValues] = useState<string[]>(["", "", "", "", ""]);
  const isFocused = useIsFocused();
  const itemsRef = useRef<Array<TextInput | null>>([]);
  useTimeout(
    () => {
      // focus on the first input
      const firstInput = itemsRef.current[0];
      if (firstInput) {
        firstInput.focus();
      }
    },
    isFocused ? 1000 : null
  );

  return (
    <SafeAreaView className='px-6 pt-5'>
      <View className='flex-row justify-start items-center h-[66px]'>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Chevronleft />
        </TouchableOpacity>
      </View>
      <View className='gap-[8px] mt-[40px] flex-col items-start justify-center mb-[24px]'>
        <Text className='text-2xl font-bold text-primaryDark'>
          Enter Verification Code
        </Text>
        <Text className='min-w-[290px] tracking-[0.5px] text-medical text-base'>
          Enter code that we have sent to your number{" "}
          <Text className='font-medium text-primaryDark'>08528188***</Text>
        </Text>
      </View>
      <View className='flex-row gap-8 '>
        {Array.from({ length: NUMBER_OF_INPUTS }, (_, index) => (
          <View
            key={index}
            className='items-center justify-center w-16 h-16 border rounded-lg bg-medicalGray border-primary'>
            <TextInput
              className='px-[10px] '
              ref={(el) => (itemsRef.current[index] = el)}
              keyboardType={"numeric"}
              value={values[index]}
              maxLength={index === 0 ? 3 : 1}
              onChange={(event) => {
                const { text } = event.nativeEvent;
                if (
                  text.length === 0 ||
                  text.length === 1 ||
                  text.length === 3
                ) {
                  if (text.length === 1 && index !== NUMBER_OF_INPUTS - 1) {
                    const nextInput = itemsRef.current[index + 1];
                    if (nextInput) {
                      nextInput.focus();
                    }
                  }
                }

                const newValues: any = [...values];
                newValues[index] = text;
                setValues(newValues);
              }}
              onKeyPress={(event) => {
                if (event.nativeEvent.key === "Backspace") {
                  if (index !== 0) {
                    const previousInput = itemsRef.current[index - 1];
                    if (previousInput) {
                      previousInput.focus();
                      return;
                    }
                  }
                }
              }}
              textContentType='oneTimeCode'
            />
          </View>
        ))}
      </View>
      <View className='mt-[50px] justify-center items-center'>
        <TouchableOpacity
          onPress={() => navigation.navigate("createPassword")}
          className='items-center justify-center w-full rounded-full h-14 bg-primary mb-[24px]'>
          <Text className='text-base font-semibold text-center text-white'>
            Verify
          </Text>
        </TouchableOpacity>
        <Text className='text-base tracking-[0.5px] text-primaryGray'>
          Didn’t receive the code?
          <Text className='text-primary'> Resend</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default VerificationScreen;
