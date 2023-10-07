import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevenLeft } from "../../constants/icons";
import { StackNavigation } from "../../constants/layouts";
import { useNavigation } from "@react-navigation/native";
import { SearchInput } from "../../components/Input";
import { Docotrs, categories } from "../../utils/data";
import { ICategory, IDoctor } from "../../utils/types";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const FindDoctors = () => {
  const navigation = useNavigation<StackNavigation>();
  return (
    <SafeAreaView className='flex-1 px-6 pt-5 bg-white'>
      <View className='flex-row justify-center items-center h-[66px]'>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevenLeft />
        </TouchableOpacity>

        <Text className='flex-1 text-lg font-bold text-center text-primaryDark'>
          Find Doctors
        </Text>
      </View>
      <View className='mt-4'>
        <SearchInput placeholder='Find a doctor' />
      </View>
      <View className='mt-[30px]'>
        <Text className='mb-3 text-lg font-semibold text-primaryDark'>
          Category
        </Text>
        <View className='flex-row flex-wrap items-center w-[395px]'>
          {categories.map((category: ICategory) => (
            <Card category={category} key={category.content} />
          ))}
        </View>
      </View>
      <View className='h-[180px] mt-[30px]'>
        <Text className='mb-4 tracking-[.3px] text-lg font-semibold'>
          Recommended Doctors
        </Text>
        <View className='flex-row items-center p-2 px-6 border rounded-md border-medicalGray-2'>
          <View className='mr-6'>
            <Image
              source={{
                uri: "https://res.cloudinary.com/dtczskyoz/image/upload/v1694892631/medical-kit/pexels-cedric-fauntleroy-4270371_uvu2mu.png",
              }}
              className='w-[100px] h-[100px] rounded-full'
            />
          </View>
          <View className='justify-between'>
            <View className='mb-[22px]'>
              <Text className='text-base font-semibold text-primaryDark'>
                Dr. Marcus Horizon
              </Text>
              <Text className='text-xs text-medical '>Chardiologist</Text>
            </View>
            <View className='flex-row'>
              <View className='flex-row bg-[#E8F3F1] w-[39px] items-center'>
                <AntDesign name='star' size={15} color='#199A8E' />
                <Text className='text-[10px] font-medium text-primary ml-1'>
                  4.7
                </Text>
              </View>
              <View className='flex-row ml-4'>
                <MaterialIcons name='location-on' size={15} color='#A1A8B0' />
                <Text className='text-[12px] text-medical'>800m away</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className='mt-[30px]'>
        <Text>Your Recent Doctors</Text>
        <FlatList
          data={Docotrs}
          renderItem={({ item }) => <Recent item={item} />}
          keyExtractor={(item) => item.name}
          horizontal
          contentContainerStyle={{ columnGap: 15 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default FindDoctors;

export const Card: React.FC<{ category: ICategory }> = ({
  category: { Icon, content },
}) => {
  return (
    <View className='items-center h-[90px]  py-2 w-[90px]'>
      <View className='mb-3'>
        <Icon />
      </View>
      <Text className='text-[12px]'>{content}</Text>
    </View>
  );
};

export const Recent: React.FC<{ item: IDoctor }> = ({
  item: { about, category, image, location, name, rating },
}) => {
  return (
    <View className='h-[145px]'>
      <Image source={{ uri: image }} className='w-20 h-20 rounded-full' />
      <Text className=''>{name}</Text>
    </View>
  );
};
