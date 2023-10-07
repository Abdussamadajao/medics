import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { IDoctor } from "../../utils/types";
import { Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
type Props = {
  item: IDoctor;
};

const TopDoctor = ({
  item: { about, image, location, name, rating, category },
}: Props) => {
  return (
    <View className='w-[160px] h-[223px] border-[#E8F3F1] border items-center rounded-md pt-4'>
      <Image
        source={{ uri: image }}
        className='w-[100px] h-[100px] rounded-full px-[16px] mb-5'
      />
      <View className='truncate'>
        <Text className='text-base font-semibold '>{name}</Text>
        <Text className='text-[12px] text-medical font-medium'>{category}</Text>
        <View className='flex-row items-center justify-between mt-3'>
          <View className='flex-row bg-[#E8F3F1] w-[39px] items-center'>
            <AntDesign name='star' size={15} color='#199A8E' />
            <Text className='text-[10px] font-medium text-primary ml-1'>
              {rating}
            </Text>
          </View>
          <View className='flex-row ml-2'>
            <MaterialIcons name='location-on' size={15} color='#A1A8B0' />
            <Text className='text-[12px] text-medical'>{location} away</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TopDoctor;
