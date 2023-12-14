import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Chat, ChevenLeft } from "../../constants/icons";
import { Entypo, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { StackNavigation } from "../../constants/layouts";
import { doctorType } from "../../utils/types";
import DatePicker from "../../components/DatePicker";
import TimePicker from "../../components/TimePicker";
const DoctorDetails = () => {
  const {
    params: { doctor },
  } = useRoute<any>();
  const navigation = useNavigation<StackNavigation | any>();

  const data: doctorType = doctor;

  const {
    attributes: {
      about,
      image,
      first_name,
      last_name,
      categories,
      rating,
      city,
      state,
    },
  } = data;

  //states
  const [isDateSelected, setIsDateSelected] = useState<any | null>(null);
  const [isTimeSelected, setIsTimeSelected] = useState<any | null>(null);
  const [showMore, setShowMore] = useState(false);

  return (
    <SafeAreaView className="flex-1 px-5 pt-5 bg-white">
      <View className="flex-row items-center justify-between mb-[10px]">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevenLeft />
        </TouchableOpacity>
        <Text className="text-base font-semibold text-primaryDark">
          Doctor Detail
        </Text>
        <Entypo name="dots-three-vertical" size={24} color="black" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="h-[132px] border border-gray-100 w-full p-2 rounded-[12px] flex-row mt-[10px]">
          <View>
            <Image
              source={{
                uri:
                  image?.data?.attributes?.url ||
                  "https://iau.edu.lc/wp-content/uploads/2016/09/dummy-image.jpg",
              }}
              className="h-[115px] w-[115px] rounded-md"
            />
          </View>
          <View className="pl-[18px]">
            <View className="mb-[18px]">
              <Text className="text-lg text-primaryDark font-semibold">
                Dr. {first_name} {last_name && last_name}
              </Text>

              <View className="flex-row">
                {categories?.data?.map((item, index, array) => (
                  <Text
                    className="text-sm text-medics_gray mr-1"
                    key={item?.id}
                  >
                    {item.attributes?.name}
                    {index === array.length - 1 ? "" : ","}
                  </Text>
                ))}
              </View>
            </View>
            <View>
              <View className="flex-row items-center mb-[5px] bg-[#E8F3F1] h-[20px] w-[48px] rounded pr-2 pl-1">
                <AntDesign name="star" size={15} color="#199A8E" />
                <Text className="text-[10px] font-medium text-primary ml-[5px]">
                  {rating}
                </Text>
              </View>
              <View className="flex-row items-center gap-1">
                <MaterialIcons name="location-on" size={15} color="#A1A8B0" />
                <Text className="text-[12px] text-medical">
                  {city},{state}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="mt-[15px] ">
          <Text className="text-base font-semibold text-primaryDark mb-[10px]">
            About
          </Text>

          {about?.length > 223 ? (
            showMore ? (
              <Pressable onPress={() => setShowMore(!showMore)}>
                <Text className="text-medics_gray_2 text-[12px] w-[354px] text-left transition ease-out duration-700">
                  {about}{" "}
                  <Text className="text-primary font-medium">Show less</Text>
                </Text>
              </Pressable>
            ) : (
              <Pressable onPress={() => setShowMore(!showMore)}>
                <Text className="text-medics_gray_2 text-[12px] w-[354px] text-left  transition-all ease-out duration-700">
                  {about.slice(0, 223)}...
                  <Text className="text-primary font-medium"> Read more</Text>
                </Text>
              </Pressable>
            )
          ) : (
            <Text className="text-medics_gray_2 text-[12px] w-[354px] text-left">
              {about}
            </Text>
          )}
        </View>
        <DatePicker
          isDateSelected={isDateSelected}
          onDateSelect={setIsDateSelected}
        />
        <TimePicker
          isTimeSelected={isTimeSelected}
          setIsTimeSelected={setIsTimeSelected}
        />
      </ScrollView>
      <View className="w-full flex-row gap-[19px] mb-3 mt-[5px]">
        <TouchableOpacity className=" w-[50px] h-[50px] bg-medicalGray_1 justify-center items-center rounded-2xl">
          <Chat />
        </TouchableOpacity>
        <TouchableOpacity
          className={`w-[266px] justify-center items-center rounded-[32px] flex-1 ${
            isDateSelected === null || isTimeSelected === null
              ? "bg-medical"
              : " bg-primary"
          }`}
          onPress={() =>
            navigation.navigate("booking", {
              doctor: doctor?.id,
              date: isDateSelected,
              time: isTimeSelected,
            })
          }
          disabled={isDateSelected === null || isTimeSelected === null}
        >
          <Text className="text-white text-base">Book an Appoinment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DoctorDetails;
