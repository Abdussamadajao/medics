import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { DoctorType, IDoctor, doctorType } from "../../utils/types";
import { Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../constants/layouts";

type Props = {
  item: doctorType;
};

const TopDoctor = ({ item }: Props) => {
  const navigation = useNavigation<StackNavigation | any>();

  const {
    attributes: { first_name, last_name, rating, city, image, categories },
  } = item;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("doctor-details", {
          doctor: item,
        })
      }
      className="min-w-[160px] h-[223px] border-[#E8F3F1] border items-center rounded-md pt-4 px-[5px]"
    >
      <Image
        source={{
          uri:
            image?.data?.attributes?.url ||
            "https://iau.edu.lc/wp-content/uploads/2016/09/dummy-image.jpg",
        }}
        className="w-[100px] h-[100px] rounded-full px-[16px] mb-5"
      />
      <View className="truncate">
        <Text className="text-base font-semibold ">{`Dr. ${first_name} ${last_name}`}</Text>
        <Text className="text-[12px] text-medical font-medium">
          {categories?.data[0]?.attributes?.name}
        </Text>
        <View className="flex-row items-center justify-between mt-3">
          <View className="flex-row bg-[#E8F3F1] w-[39px] items-center">
            <AntDesign name="star" size={15} color="#199A8E" />
            <Text className="text-[10px] font-medium text-primary ml-1">
              {rating}
            </Text>
          </View>
          <View className="flex-row ml-2">
            <MaterialIcons name="location-on" size={15} color="#A1A8B0" />
            <Text className="text-[12px] text-medical">{city}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TopDoctor;
