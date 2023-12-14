import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { HospitalAttributes } from "../../utils/types";
import { ChevenLeft } from "../../constants/icons";
import { StackNavigation } from "../../constants/layouts";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import AnimatedSwiper from "../../components/Carousel/AnimateSwiper";

const HospitalDetails = () => {
  const navigation = useNavigation<StackNavigation>();
  const [showMore, setShowMore] = useState(false);
  const {
    params: { hospital },
  } = useRoute<any>();

  const data: HospitalAttributes = hospital;

  const {
    attributes: {
      name,
      address,
      categories,
      city,
      closing_hours,
      doctors,
      description,
      state,
      image,
      email,
      phone,
      opening_days,
      opening_hours,
    },
  } = data;
  const openingTime = moment(opening_hours, "HH:mm:ss.SSS");
  const closingTime = moment(closing_hours, "HH:mm:ss.SSS");
  return (
    <View className="  bg-white flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <TouchableOpacity
            className="absolute z-[10] m-[15px] top-3"
            onPress={() => navigation.goBack()}
          >
            <ChevenLeft />
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={{ uri: image?.data?.attributes?.url }}
            className="w-full h-[280px]"
          />
          <View className="px-4 pt-4">
            <Text className="font-semibold text-2xl">{name}</Text>
            <View className="flex-row gap-[5px] items-start mt-4">
              <Ionicons name="location" size={22} color={"#199A8E"} />
              <Text className="text-base text-gray-600 w-[350px]">
                {address}, {city}, {state}
              </Text>
            </View>
            <View className="flex-row gap-[5px] items-center mt-2">
              <Ionicons name="time" size={22} color={"#199A8E"} />
              <Text>
                <Text>{opening_days}</Text> {"  |  "}
                {openingTime.format("hh:mm A")} {" - "}
                {closingTime.format("hh:mm A")}
              </Text>
            </View>

            <View className="border-b border-gray-200 pt-4 m-[5px]" />

            <View>
              <Text className="font-semibold text-lg">About Us</Text>
              {description?.length > 223 ? (
                showMore ? (
                  <Pressable onPress={() => setShowMore(!showMore)}>
                    <Text className="text-medics_gray_2 text-base w-[380px] text-left transition ease-out duration-700">
                      {description}
                      <Text className="text-primary font-medium">
                        Show less
                      </Text>
                    </Text>
                  </Pressable>
                ) : (
                  <Pressable onPress={() => setShowMore(!showMore)}>
                    <Text className="text-medics_gray_2 text-base text-left w-[380px]  transition-all ease-out duration-700">
                      {description.slice(0, 223)}...
                      <Text className="text-primary font-medium">
                        {" "}
                        Read more
                      </Text>
                    </Text>
                  </Pressable>
                )
              ) : (
                <Text className="text-medics_gray_2 text-base w-[380px] text-left">
                  {description}
                </Text>
              )}
            </View>
            <View>
              <Text className="font-semibold text-lg mt-2">Our Doctors</Text>

              {doctors?.data?.map((item) => (
                <View key={item?.id}>
                  {/* <Text>{item?.attributes?.about}</Text> */}
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HospitalDetails;
