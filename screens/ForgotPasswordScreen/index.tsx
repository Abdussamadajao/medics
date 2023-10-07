import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
//@ts-ignore
import Chevronleft from "../../assets/chevronleft";
import { useNavigation } from "@react-navigation/native";
import { Formik, FormikProps } from "formik";
import Input from "../../components/Input";
import * as Yup from "yup";
import { StackNavigation } from "../../constants/layouts";

interface FormValues {
  email?: string;
  phone?: string;
}

const ForgotPasswordScreen = () => {
  const navigation = useNavigation<StackNavigation>();
  const [selectedTab, setSelectedTab] = useState<"email" | "phone">("email");

  const initialValues: FormValues = {
    phone: "",
    email: "",
  };

  const onSubmit = (values: FormValues) => {
    console.log(values.email || values?.phone);
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const Schema = Yup.object().shape({
    email: Yup.string().email("Email is invalid"),
    // .required("Please input your email"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .min(11, "Phone number must be 11 chars")
      .max(11, "Phone number must be 11 chars"),
    // .required(),
  });
  return (
    <SafeAreaView className='px-6 pt-5'>
      <View className='flex-row justify-start items-center h-[66px]'>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Chevronleft />
        </TouchableOpacity>
      </View>
      <View className='gap-[8px] mt-[40px] flex-col items-start justify-center mb-[24px]'>
        <Text className='text-2xl font-bold text-primaryDark'>
          Forgot Your Password?
        </Text>
        <Text className='min-w-[290px] tracking-[0.5px] text-medical text-base'>
          Enter your email or your phone number, we will send you confirmation
          code
        </Text>
      </View>

      <View className='w-full h-[51px] rounded-[29px] border border-secondary bg-medicalGray items-center justify-between px-1 flex-row'>
        <TouchableOpacity
          className={`w-1/2 h-[43px]  rounded-[29px] items-center justify-center ${
            selectedTab === "email" ? "bg-white" : "bg-transparent"
          }`}
          onPress={() => setSelectedTab("email")}>
          <Text
            className={`text-sm font-medium ${
              selectedTab === "email" ? "text-primary" : "text-medical"
            }`}>
            Email
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`w-1/2 h-[43px] rounded-full items-center justify-center ${
            selectedTab === "phone" ? "bg-white" : "bg-transparent"
          }`}
          onPress={() => setSelectedTab("phone")}>
          <Text
            className={`text-sm font-medium ${
              selectedTab === "phone" ? "text-primary" : "text-medical"
            }`}>
            Phone
          </Text>
        </TouchableOpacity>
      </View>
      <View className='mt-6'>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => onSubmit(values)}
          validationSchema={Schema}>
          {({
            values,
            errors,
            touched,
            isValid,
            handleSubmit,
            handleChange,
            setFieldTouched,
          }: FormikProps<FormValues>) => (
            <>
              {selectedTab === "email" ? (
                <Input
                  error={errors.email}
                  icon={"email-outline"}
                  onChangeText={handleChange("email")}
                  onFocus={() => setFieldTouched("email")}
                  placeholder='Enter your email'
                  touched={touched.email}
                  value={values.email}
                />
              ) : (
                <Input
                  error={errors.phone}
                  icon={"phone"}
                  onChangeText={handleChange("phone")}
                  onFocus={() => setFieldTouched("phone")}
                  placeholder='Enter your phone number'
                  touched={touched.phone}
                  value={values.phone}
                  keyboardType={"phone-pad"}
                />
              )}

              <TouchableOpacity
                onPress={() => {
                  handleSubmit();
                  navigation.navigate("Verification");
                }}
                className='items-center justify-center w-full rounded-full h-14 bg-primary'>
                <Text className='text-base font-semibold leading-6 text-white'>
                  Reset Password
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
