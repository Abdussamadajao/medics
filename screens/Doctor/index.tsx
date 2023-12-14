import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevenLeft } from "../../constants/icons";
import { Entypo, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { doctorType } from "../../utils/types";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../constants/layouts";
import { useGetAllDoctorsQuery } from "../../redux/queries/doctors";
import { RefreshControl } from "react-native";
import { Button } from "react-native";

const Doctor = () => {
  const navigation = useNavigation<StackNavigation>();
  const { isError, refetch, isLoading, data } = useGetAllDoctorsQuery();

  const doctors: any = data?.data;

  const [refreshing, setRefreshing] = useState(false);
  const handleRefresh = async () => {
    setRefreshing(true);

    try {
      await refetch().unwrap();
    } catch (err) {
      console.error(err);
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 px-5 pt-5 bg-white">
      <View className="flex-row items-center justify-between mb-6">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevenLeft />
        </TouchableOpacity>
        <Text className="text-base font-semibold text-primaryDark">
          All Doctors
        </Text>
        <Entypo name="dots-three-vertical" size={24} color="black" />
      </View>

      {isLoading ? (
        <View className="mx-auto mt-[67%]">
          <ActivityIndicator size={"large"} />
        </View>
      ) : isError ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          className="mt-[67%]"
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text className="text-center text-base w-[40%] mb-5 font-semibold">
            Something went wrong. Please try again.
          </Text>
          <Button title="Retry" onPress={() => handleRefresh()} />
        </ScrollView>
      ) : (
        <FlatList
          data={doctors}
          renderItem={({ item }) => <Card item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ rowGap: 16 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

export default Doctor;

type Props = {
  item: doctorType;
};

export const Card = ({ item }: Props) => {
  const {
    attributes: {
      first_name,
      image,
      last_name,
      rating,
      city,
      categories: { data },
    },
  } = item;
  const {
    attributes: { name },
  } = data[0];
  const navigation = useNavigation<StackNavigation | any>();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("doctor-details", {
          doctor: item,
        })
      }
      className="border border-medicalGray-2  flex-row rounded-[12px] p-2"
    >
      <View>
        <Image
          source={{
            uri:
              image?.data?.attributes?.url ||
              "https://iau.edu.lc/wp-content/uploads/2016/09/dummy-image.jpg",
          }}
          className="w-[120px] h-[123px] rounded-[12px]"
        />
      </View>
      <View className="mb-4 pl-[18px] gap-4">
        <View>
          <Text className="text-primaryDark text-lg font-semibold">
            Dr. {first_name} {last_name && last_name}
          </Text>
          <Text className="text-medics_gray font-medium text-xs">{name}</Text>
        </View>
        <View>
          <View className="flex-row items-center mb-[5px] bg-[#E8F3F1] h-[28px] w-[48px] pr-2 pl-1 rounded">
            <AntDesign name="star" size={12} color="#199A8E" />
            <Text className="text-[14px] font-medium text-primary ml-[3px]">
              {rating}
            </Text>
          </View>
          <View className="flex-row items-center gap-1">
            <MaterialIcons name="location-on" size={15} color="#A1A8B0" />
            <Text className="text-[12px] text-medical">{city}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
