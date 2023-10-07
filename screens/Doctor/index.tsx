import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevenLeft } from "../../constants/icons";
import { Entypo, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Docotrs } from "../../utils/data";
import { IDoctor } from "../../utils/types";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../constants/layouts";

const Doctor = () => {
  const navigation = useNavigation<StackNavigation>();
  return (
    <SafeAreaView className='flex-1 px-5 pt-5 bg-white'>
      <View className='flex-row items-center justify-between mb-6'>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevenLeft />
        </TouchableOpacity>
        <Text className='text-base font-semibold text-primaryDark'>
          Top Doctors
        </Text>
        <Entypo name='dots-three-vertical' size={24} color='black' />
      </View>
      <FlatList
        data={Docotrs}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ rowGap: 16 }}
      />
    </SafeAreaView>
  );
};

export default Doctor;

type Props = {
  item: IDoctor;
};

export const Card = ({
  item: { image, about, category, location, name, rating },
}: Props) => {
  return (
    <View className='border border-medicalGray-2  flex-row rounded-[12px] p-2'>
      <View>
        <Image
          source={{ uri: image }}
          className='w-[120px] h-[123px] rounded-[12px]'
        />
      </View>
      <View className='mb-4 pl-[18px] gap-4'>
        <View>
          <Text>{name}</Text>
          <Text>{category}</Text>
        </View>
        <View>
          <View className='flex-row items-center gap-1 mb-[5px] bg-[#E8F3F1] h-[28px] w-[47px] rounded'>
            <AntDesign name='star' size={15} color='#199A8E' />
            <Text className='text-[10px] font-medium text-primary'>
              {rating}
            </Text>
          </View>
          <View className='flex-row items-center gap-1'>
            <MaterialIcons name='location-on' size={15} color='#A1A8B0' />
            <Text className='text-[12px] text-medical'>{location} away</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
