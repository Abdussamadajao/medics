import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevenLeft } from "../../constants/icons";
import { Feather, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../constants/layouts";
import { SearchInput } from "../../components/Input";

const Pharmacy = () => {
  const navigation = useNavigation<StackNavigation>();
  return (
    <SafeAreaView className="flex-1 px-5 pt-5 bg-white">
      <View className="flex-row items-center justify-between mb-[43px]">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevenLeft />
        </TouchableOpacity>
        <Text className="text-base font-semibold text-primaryDark">
          Doctor Detail
        </Text>
        <Feather name="shopping-cart" size={24} color="black" />
      </View>
      <View className="">
        <SearchInput placeholder="Search drugs, category..." />
      </View>
      <View className="bg-[#E8F3F1] h-[150px] mt-6 rounded-md flex-row pl-5 pr-3 justify-between">
        <View className="flex-col pt-5 gap-[15px]">
          <Text className="w-[160px] text-lg text-primaryDark font-semibold">
            Order quickly with Prescription
          </Text>
          <TouchableOpacity className="w-[133px] bg-primary py-[7px] px-[5px] justify-center items-center rounded-[8px]">
            <Text className="text-xs font-semibold text-white">
              Upload Prescription
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={{
              uri: "https://res.cloudinary.com/dtczskyoz/image/upload/v1701458854/medical-kit/frevur0b5k0brbocjugr.png",
            }}
            className="h-[159px] w-[213px]"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Pharmacy;
