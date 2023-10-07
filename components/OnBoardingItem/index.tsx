import { View, Text, Image } from "react-native";
import React from "react";
import { OnBoarding } from "../../utils/types";
import { LinearGradient } from "expo-linear-gradient";

const OnBoardingItem: React.FC<{ item: OnBoarding; scrollX: any }> = ({
  item,
  scrollX,
}) => {
  return (
    <>
      <View className=' pl-[37px] pr-[37px] pt-24'>
        <Image
          source={{
            uri: item?.image,
          }}
          resizeMode='contain'
          className='w-auto h-[468px]'
        />

        <View className=' bg-[#F5F7FF] w-[321px] h-[226px] rounded-tr-[24px] rounded-tl-[24px] pl-[17px] pr-[20px] pt-12'>
          <Text className='text-[22px] text-[#101623] font-bold mt-'>
            {item?.content}
          </Text>
        </View>
      </View>
    </>
  );
};

export default OnBoardingItem;
