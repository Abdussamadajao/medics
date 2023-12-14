import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Docotrs } from "../../utils/data";
import { IDoctor, doctorType } from "../../utils/types";
import {
  Calendar,
  CalendarGr,
  ChevenLeft,
  EditSquare,
  Visa,
} from "../../constants/icons";
import { StackNavigation } from "../../constants/layouts";
import { Entypo, AntDesign, MaterialIcons } from "@expo/vector-icons";
import moment from "moment";

const BookinkDoctor = () => {
  const {
    params: { doctor: data, time, date },
  } = useRoute<any>();
  const navigation = useNavigation<StackNavigation | any>();

  const doctor = data as doctorType;

  const {
    attributes: { last_name, first_name, image, categories, rating, city },
  } = doctor;

  const dateSelect = moment(date).format("dddd, MMM D, YYYY");

  return (
    <SafeAreaView className="flex-1 px-5 pt-5 bg-white">
      <View className="flex-row justify-center items-center h-[66px]">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevenLeft />
        </TouchableOpacity>

        <Text className="flex-1 text-lg font-bold text-center text-primaryDark">
          Appointment
        </Text>
      </View>
      <View className="border border-medicalGray_1 rounded-[12px] p-2 flex-row ">
        <View>
          <Image
            source={{
              uri: image?.data?.attributes?.url,
            }}
            className="w-[143px] h-[141px] rounded"
          />
        </View>
        <View className="pl-[18px] ">
          <View className="mb-[18px]">
            <Text className="text-lg text-primaryDark font-semibold">{`Dr. ${first_name} ${
              last_name && last_name
            }`}</Text>
            <Text className="text-xs text-medics_gray">{}</Text>
          </View>
          <View>
            <View className="flex-row items-center gap-1 mb-[5px] bg-[#E8F3F1] h-[28px] w-[47px] rounded">
              <AntDesign name="star" size={15} color="#199A8E" />
              <Text className="text-[10px] font-medium text-primary">
                {rating}
              </Text>
            </View>
            <View className="flex-row items-center gap-1">
              <MaterialIcons name="location-on" size={15} color="#A1A8B0" />
              <Text className="text-[12px] text-medical">{city}</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="flex-row mt-4 border-b border-medicalGray_1 pb-3">
        <View className="flex-1">
          <Text className="font-semibold text-base text-primaryDark">Date</Text>
          <View className="flex-row mt-[21px] items-center">
            <View className="h-[36px] w-[36px] bg-medicalGray_1 justify-center items-center rounded-full">
              <CalendarGr />
            </View>
            <View className="pl-[15px]">
              <Text className="text-sm font-semibold text-[#555]">
                {dateSelect} | {time}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <Text className="text-medics_gray text-xs font-normal">Change</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row mt-4 border-b border-medicalGray_1 pb-3">
        <View className="flex-1">
          <Text className="font-semibold text-base text-primaryDark">
            Reason
          </Text>
          <View className="flex-row mt-[21px] items-center">
            <View className="h-[36px] w-[36px] bg-medicalGray_1 justify-center items-center rounded-full">
              <EditSquare />
            </View>
            <View className="pl-[15px]">
              <Text className="text-sm font-semibold text-[#555]">
                Chest pain
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <Text className="text-medics_gray text-xs font-normal">Change</Text>
        </TouchableOpacity>
      </View>

      <View className="pt-2  border-b pb-3 border-medicalGray_1">
        <Text className="text-base text-primaryDark font-semibold mb-[15px]">
          Payment Detail
        </Text>
        <View className="gap-y-[5px]">
          <View className="flex-row">
            <Text className="flex-1 text-[14px] font-normal text-medical">
              Consultation
            </Text>
            <Text className="text-sm text-primaryDark font-normal">$60.00</Text>
          </View>
          <View className="flex-row">
            <Text className="flex-1 text-[14px] font-normal text-medical">
              Admin Fee
            </Text>
            <Text className="text-sm text-primaryDark font-normal">$01.00</Text>
          </View>
          <View className="flex-row">
            <Text className="flex-1 text-[14px] font-normal text-medical">
              Aditional Discount
            </Text>
            <Text className="text-sm text-primaryDark font-normal">-</Text>
          </View>
          <View className="flex-row">
            <Text className="flex-1 text-sm font-semibold text-primaryDark">
              Total
            </Text>
            <Text className="text-sm font-semibold text-primary">$61.00</Text>
          </View>
        </View>
      </View>

      <View className="pt-3">
        <Text className="mb-[10px] font-semibold text-base text-primaryDark">
          Payment Method
        </Text>
        <View className="border border-medicalGray_1 h-[49px] rounded-xl  flex-row items-center justify-between px-4">
          <Visa />
          <Pressable>
            <Text className="text-sm text-medics_gray font-normal">Change</Text>
          </Pressable>
        </View>
      </View>
      <View className="flex-row pt-3 item-center">
        <View className="flex-1">
          <Text className="text-sm text-medics_gray_2 font-normal">Total</Text>
          <Text className="text-[18px] text-primaryDark font-semibold">
            $ 61.00
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Schedule")}
          className="bg-primary w-[192px] h-[52px] items-center justify-center rounded-[32px]"
        >
          <Text className="text-white font-semibold text-sm">Book</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BookinkDoctor;
