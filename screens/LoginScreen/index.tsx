import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

//@ts-ignore
import Chevronleft from "../../assets/chevronleft";
//@ts-ignore
import Google from "../../assets/google";
//@ts-ignore
import Apple from "../../assets/apple";
//@ts-ignore
import Facebook from "../../assets/facebook";
import Input from "../../components/Input";
import { useNavigation } from "@react-navigation/native";

import { Formik, Field, FormikProps, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import CustomModal from "../../components/Modal";
import { StackNavigation } from "../../constants/layouts";
import { useAppDispatch } from "../../redux/hooks";
import {
  AuthFailure,
  AuthStart,
  AuthSuccess,
} from "../../redux/slice/authSlice";

interface FormValues {
  email: string;
  password: string;
}

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigation>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialValues: FormValues = {
    password: "",
    email: "",
  };

  const getCharacterValidationError = (str: string) => {
    return `Your password must have at least 1 ${str} character`;
  };
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email is invalid")
      .required("Please input your email"),
    password: Yup.string()
      .min(8)
      .required("Password is required")
      .matches(/[0-9]/, getCharacterValidationError("digit"))
      .matches(/[a-z]/, getCharacterValidationError("lowercase"))
      .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
  });

  const handleModal = () => {
    setIsModalOpen(false);
    navigation.navigate("Main");
  };
  const onSubmit = (values: FormValues) => {
    dispatch(AuthStart());
    try {
      console.log(values);
      setIsModalOpen(true);
      dispatch(AuthSuccess(values));
    } catch (error: any) {
      dispatch(AuthFailure(error));
    }
  };

  return (
    <SafeAreaView className='px-6 pt-5'>
      <View className='flex-row justify-center  items-center h-[66px]'>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Chevronleft />
        </TouchableOpacity>

        <Text className='flex-1 text-lg font-bold text-center text-primaryDark'>
          Login
        </Text>
      </View>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={loginSchema}>
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
            <View className='relative mt-6 mb-14'>
              <Input
                value={values.email}
                error={errors?.email}
                icon={"email-outline"}
                onFocus={() => setFieldTouched("email")}
                placeholder='Enter your email'
                onChangeText={handleChange("email")}
                touched={touched.email}
              />

              <Input
                value={values.password}
                icon={"lock-outline"}
                onFocus={() => setFieldTouched("password")}
                password
                error={errors.password}
                placeholder='Enter your password'
                onChangeText={handleChange("password")}
                touched={touched.password}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
                className='absolute right-0 px-2 -bottom-2'>
                <Text className='text-sm font-medium text-primary'>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  handleSubmit();
                }}
                disabled={!isValid}
                style={{ backgroundColor: isValid ? "#199A8E" : "#A1A8B0" }}
                className='items-center justify-center w-full h-12 rounded-full '>
                <Text className='text-base font-semibold leading-6 text-white'>
                  Login
                </Text>
              </TouchableOpacity>
              <Text className='mt-6 mx-auto tracking-[.5px] text-primaryGray text-[15px] leading-6'>
                Don’t have an account?
                <Text
                  className=' text-primary'
                  onPress={() => navigation.navigate("Register")}>
                  {" "}
                  Sign Up
                </Text>
              </Text>
            </View>
          </>
        )}
      </Formik>

      <View className='mt-[29px] flex-col gap-[24px]'>
        <View className='flex-row items-center justify-center '>
          <Text className='border-b flex-1 mx-[10px] border-medical' />
          <Text className='mt-4 text-base text-medical'>OR</Text>
          <Text className='border-b flex-1 mx-[10px] border-medical' />
        </View>
        <View className='gap-[16px] justify-center items-center'>
          <TouchableOpacity className='flex-row items-center justify-between w-full h-12 pl-4 pr-24 border rounded-full border-primaryGray'>
            <Google />
            <Text className='text-base font-semibold text-center'>
              Sign in with Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className='flex-row items-center justify-between w-full h-12 pl-4 pr-24 border rounded-full border-primaryGray'>
            <Apple />
            <Text className='text-base font-semibold text-center'>
              Sign in with Apple
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className='flex-row items-center justify-between w-full h-12 pl-4 pr-24 border rounded-full border-primaryGray'>
            <Facebook />
            <Text className='text-base font-semibold text-center'>
              Sign in with Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <CustomModal
        content='Once again you login successfully
        into medidoc app'
        actionText='Go to Home'
        onPress={handleModal}
        open={isModalOpen}
        title='Yeay! Welcome Back'
        icon
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
