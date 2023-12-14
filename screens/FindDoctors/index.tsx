import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Pressable,
  ActivityIndicator,
  Button,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevenLeft } from "../../constants/icons";
import { StackNavigation } from "../../constants/layouts";
import { useNavigation } from "@react-navigation/native";
import { SearchInput } from "../../components/Input";
import { Docotrs, categories } from "../../utils/data";
import {
  CategoryAttributes,
  CategoryType,
  DoctorType,
  ICategory,
  IDoctor,
  doctorType,
} from "../../utils/types";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SvgUri } from "react-native-svg";
import { useGetAllCategoriesQuery } from "../../redux/queries/categories";
import { useGetAllDoctorsQuery } from "../../redux/queries/doctors";

const FindDoctors = () => {
  let premiun = true;
  const navigation = useNavigation<StackNavigation>();
  const { data, isError, isLoading, refetch } = useGetAllCategoriesQuery();
  const {
    data: doctors,
    error,
    isLoading: isDoctorLoading,
    refetch: doctorRefetch,
  } = useGetAllDoctorsQuery();

  const categories: any = data?.data;
  const top_doctors: any = doctors?.data;

  const top_doctor = top_doctors?.filter(
    (doctor: doctorType) => doctor.attributes?.premiun === premiun
  );

  console.log(top_doctor[0]?.attributes?.first_name);

  const {
    attributes: {
      first_name,
      last_name,
      categories: doctor_category,
      rating,
      city,
    },
  } = top_doctor[0] as doctorType;
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
    <SafeAreaView className="flex-1 px-6 pt-5 bg-white">
      <View className="flex-row justify-center items-center h-[66px]">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevenLeft />
        </TouchableOpacity>

        <Text className="flex-1 text-lg font-bold text-center text-primaryDark">
          Find Doctors
        </Text>
      </View>
      <View className="mt-4">
        <SearchInput placeholder="Find a doctor" />
      </View>
      <View className="mt-[30px]">
        <Text className="mb-3 text-lg font-semibold text-primaryDark">
          Category
        </Text>
        <View className="flex-row flex-wrap items-center">
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
              className="mt-[10px]"
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
              key={"_"}
              data={categories}
              renderItem={({ item }) => <Card item={item} />}
              keyExtractor={(item) => "_" + item?.id}
              numColumns={4}
              contentContainerStyle={{ gap: 11 }}
            />
          )}
        </View>
      </View>
      <View className="h-[180px] mt-[30px]">
        <Text className="mb-4 tracking-[.3px] text-lg font-semibold">
          Recommended Doctors
        </Text>
        <View className="flex-row items-center p-2 px-6 border rounded-md border-medicalGray-2 h-[132px]">
          <View className="mr-6">
            <Image
              source={{
                uri: "https://res.cloudinary.com/dtczskyoz/image/upload/v1694892631/medical-kit/pexels-cedric-fauntleroy-4270371_uvu2mu.png",
              }}
              className="w-[100px] h-[100px] rounded-full"
            />
          </View>
          <View className="justify-between">
            <View className="mb-[22px] bo">
              <Text className="text-base font-semibold text-primaryDark">
                Dr. {first_name} {last_name}
              </Text>
              <Text className="text-sm text-medical capitalize ">
                {doctor_category?.data[0]?.attributes?.name}
              </Text>
            </View>
            <View className="flex-row">
              <View className="flex-row bg-[#E8F3F1] w-[39px] items-center">
                <AntDesign name="star" size={15} color="#199A8E" />
                <Text className="text-[10px] font-medium text-primary ml-1">
                  {rating}
                </Text>
              </View>
              <View className="flex-row ml-4">
                <MaterialIcons name="location-on" size={15} color="#3B4453" />
                <Text className="text-[12px] text-medics_black">{city}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="mt-[30px]">
        <Text className="mb-[12px] font-semibold text-lg text-primaryDark">
          Your Recent Doctors
        </Text>
        <FlatList
          data={top_doctors}
          renderItem={({ item }) => <Recent item={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          contentContainerStyle={{ columnGap: 15 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default FindDoctors;

export const Card: React.FC<{ item: CategoryAttributes }> = ({ item }) => {
  const {
    attributes: { name, icon },
  } = item;

  return (
    <View className="items-center py-2 w-[90px]">
      <View className="mb-3">
        <SvgUri color={"red"} uri={icon?.data?.attributes?.url} fontSize={12} />
      </View>
      <Text className="text-[12px] capitalize font-medium">{name}</Text>
    </View>
  );
};

export const Recent: React.FC<{ item: doctorType }> = ({ item }) => {
  const navigation = useNavigation<StackNavigation | any>();
  const {
    attributes: { first_name, image },
  } = item;
  return (
    <Pressable
      className="h-[145px] items-center gap-[8px]"
      onPress={() =>
        navigation.navigate("doctor-details", {
          doctor: item,
        })
      }
    >
      <Image
        source={{
          uri:
            image?.data?.attributes?.url ||
            "https://iau.edu.lc/wp-content/uploads/2016/09/dummy-image.jpg",
        }}
        className="w-20 h-20 rounded-full"
      />
      <Text className="text-medics_black text-[13px] font-medium">
        Dr. {first_name}
      </Text>
    </Pressable>
  );
};
