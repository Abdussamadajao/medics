import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  Button,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Notification } from "../../constants/icons";
import { MenuData } from "../../utils/data";
import Menu from "../../components/Menu";
import TopDoctor from "../../components/Top-doctor";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../constants/layouts";
import { SearchInput } from "../../components/Input";

import { useGetAllDoctorsQuery } from "../../redux/queries/doctors";
import { RefreshControl } from "react-native";

const HomeScreen = () => {
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
    <SafeAreaView className="bg-white flex-1  pt-[28px]">
      <View className="px-5">
        <View className="flex-row items-start justify-between">
          <Text className="text-[22px] leading-[32px] text-primaryDark font-semibold w-[188px]">
            Find your desire health solution
          </Text>
          <Notification />
        </View>
        <View className="mt-5">
          <SearchInput placeholder="Search doctor, drugs, articles..." />
        </View>
        <View className="flex-row justify-around mt-6">
          {MenuData.map((menu, index) => (
            <Menu key={index} menu={menu} />
          ))}
        </View>
        <View className="bg-[#E8F3F1] h-[150px] mt-6 rounded-md flex-row pl-7 pr-3 justify-between">
          <View className="flex-col pt-5 gap-[15px]">
            <Text className="w-[168px] text-lg font-semibold">
              Early protection for your family health
            </Text>
            <TouchableOpacity className="w-[97px] h-[29px] bg-primary justify-center items-center rounded-full">
              <Text className="text-xs font-semibold text-white">
                Learn more
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image
              source={{
                uri: "https://res.cloudinary.com/dtczskyoz/image/upload/v1694877502/medical-kit/Image_cg7wvj.png",
              }}
              className="w-[130px] h-[150px]"
            />
          </View>
        </View>

        <View className="mt-6">
          <View className="flex-row justify-between mb-[17px] items-center">
            <Text className="text-lg font-semibold text-primaryDark">
              Doctors
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Doctor")}>
              <Text className="text-sm text-primary">See all</Text>
            </TouchableOpacity>
          </View>

          {isLoading ? (
            <View className="mx-auto">
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
              className="mt-[60px]"
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
              //@ts-ignore
              renderItem={({ item, index }) =>
                index < 4 && <TopDoctor item={item} />
              }
              keyExtractor={(item) => item.id}
              horizontal
              contentContainerStyle={{ columnGap: 10 }}
              showsHorizontalScrollIndicator={false}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
