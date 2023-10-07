import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
//@ts-ignore
import Chevronleft from "../../assets/chevronleft";
import { useNavigation } from "@react-navigation/native";
import { Formik, Field, FormikProps, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import Input from "../../components/Input";
import { StackNavigation } from "../../constants/layouts";

interface FormValues {
  password: string;
  confirm_password: string;
}

const CreatePasswordScreen = () => {
  const navigation = useNavigation<StackNavigation>();

  const initialValues: FormValues = {
    password: "",
    confirm_password: "",
  };

  const getCharacterValidationError = (str: string) => {
    return `Your password must have at least 1 ${str} character`;
  };

  const Schema = Yup.object().shape({
    password: Yup.string()
      .min(8)
      .required("Password is required")
      .matches(/[0-9]/, getCharacterValidationError("digit"))
      .matches(/[a-z]/, getCharacterValidationError("lowercase"))
      .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
    confirm_password: Yup.string().oneOf(
      [Yup.ref("password")],
      "Passwords must match"
    ),
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };
  return (
    <SafeAreaView className='px-6 pt-5'>
      <View className='flex-row justify-start items-center h-[66px]'>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Chevronleft />
        </TouchableOpacity>
      </View>
      <View className='gap-[8px] mt-[40px] flex-col items-start justify-center mb-[24px]'>
        <Text className='text-2xl font-bold text-primaryDark'>
          Create New Password
        </Text>
        <Text className='min-w-[290px] tracking-[0.5px] text-medical text-base'>
          Create your new password to login
        </Text>
      </View>
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
            <View className='mb-[24px]'>
              <Input
                value={values.password}
                icon={"lock-outline"}
                onFocus={() => setFieldTouched("password")}
                password
                error={errors.password}
                placeholder='Enter your new password'
                onChangeText={handleChange("password")}
                touched={touched.password}
              />
              <Input
                value={values.confirm_password}
                icon={"lock-outline"}
                onFocus={() => setFieldTouched("confirm_password")}
                password
                error={errors.confirm_password}
                placeholder='Confirm password'
                onChangeText={handleChange("confirm_password")}
                touched={touched.confirm_password}
              />
            </View>
            <TouchableOpacity className='items-center justify-center w-full rounded-full bg-primary h-14'>
              <Text className='text-base font-semibold text-white'>
                Create Password
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default CreatePasswordScreen;
