import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevenLeft } from "../../constants/icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../constants/layouts";
import { SearchInput } from "../../components/Input";
import { useGetAllHospitalsQuery } from "../../redux/queries/hospitals";
import { HospitalAttributes } from "../../utils/types";
import { Button } from "react-native";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useGetAllCategoriesQuery } from "../../redux/queries/categories";
import Categories from "../../components/Cards/Categories";

const Hospitals = () => {
  const navigation = useNavigation<StackNavigation>();
  const { data, isLoading, isError, refetch } = useGetAllHospitalsQuery();

  const hospitals: any = data?.data;

  console.log(hospitals);

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
      <View className="flex-row justify-center items-center h-[66px]">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevenLeft />
        </TouchableOpacity>

        <Text className="flex-1 text-lg font-bold text-center text-primaryDark">
          Hospitals
        </Text>
      </View>
      <View className="my-4">
        <SearchInput placeholder="Find a Hospital" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {isLoading ? (
            <View className="mx-auto mt-[67%]">
              <ActivityIndicator size={"large"} />
            </View>
          ) : isError ? (
            <ScrollView
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={handleRefresh}
                />
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
              data={hospitals}
              renderItem={({ item }) => <Hospital item={item} />}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ rowGap: 16 }}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Hospitals;

const Hospital: React.FC<{ item: HospitalAttributes }> = ({ item }) => {
  const {
    attributes: { name, image, address, city, state, opening_days },
  } = item;
  const navigation = useNavigation<StackNavigation | any>();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("hospital-details", {
          hospital: item,
        })
      }
      className="w-full border rounded-xl border-medicalGray_1"
    >
      <Image
        source={{
          uri: image?.data?.attributes?.url,
        }}
        className="w-full h-[150px] rounded-tr-xl rounded-tl-xl"
      />

      <View className="p-3 mt-[2px]">
        <Text className="font-semibold text-lg mb-1">{name}</Text>
        <View className="flex-row gap-[5px] items-start">
          <Ionicons name="location-sharp" size={18} color="#199A8E" />
          <Text className="text-medics_gray text-base w-[320px] font-normal">
            {address}, {city}, {state}
          </Text>
        </View>
        <View className="flex-row gap-[5px] items-center mt-[2px]">
          <Ionicons name="time" size={18} color="#199A8E" />
          <Text className="text-medics_gray text-base font-normal">
            {opening_days}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};
