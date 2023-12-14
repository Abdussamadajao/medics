import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Calendar, Notification } from "../../constants/icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { schedule } from "../../utils/data";
import { ScheduleProps } from "../../utils/types";
import { Feather, EvilIcons } from "@expo/vector-icons";
import { StackNavigation } from "../../constants/layouts";

const Schedule = () => {
  const [selectedTab, setSelectedTab] = useState<
    "upcoming" | "completed" | "canceled" | any
  >("upcoming");

  const filter =
    selectedTab === "all"
      ? schedule
      : schedule?.filter((item: ScheduleProps) =>
          item.status?.toLowerCase()?.includes(selectedTab?.toLowerCase())
        );

  return (
    <SafeAreaView className="flex-1 px-5 pt-5 bg-white">
      <View className="flex-row">
        <Text className="flex-1 font-semibold text-lg">Schedule</Text>
        <TouchableOpacity>
          <Notification />
        </TouchableOpacity>
      </View>
      <View className="w-full bg-medics_green h-[46px] mt-[41px] rounded-lg flex-row justify-between">
        <TouchableOpacity
          onPress={() => setSelectedTab("upcoming")}
          className={`h-[46px] w-[104px] justify-center items-center rounded-lg ${
            selectedTab === "upcoming" ? "bg-primary " : "bg-transparent"
          }`}
        >
          <Text
            className={`text-sm font-medium ${
              selectedTab === "upcoming" ? "text-white" : "text-primaryDark"
            }`}
          >
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab("completed")}
          className={`h-[46px] w-[104px] justify-center items-center rounded-lg  ${
            selectedTab === "completed" ? "bg-primary " : "bg-transparent"
          }`}
        >
          <Text
            className={`text-sm font-medium ${
              selectedTab === "completed" ? "text-white" : "text-primaryDark"
            }`}
          >
            Completed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab("canceled")}
          className={`h-[46px] w-[104px] justify-center items-center rounded-lg ${
            selectedTab === "canceled" ? "bg-primary " : "bg-transparent"
          }`}
        >
          <Text
            className={`text-sm font-medium ${
              selectedTab === "canceled" ? "text-white" : "text-primaryDark"
            }`}
          >
            Canceled
          </Text>
        </TouchableOpacity>
      </View>

      <View className="mt-[30px]">
        <FlatList
          data={filter}
          renderItem={({ item }) => <Card item={item} />}
          contentContainerStyle={{ gap: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Schedule;

export const Card: React.FC<{ item: ScheduleProps }> = ({
  item: { date, doctor, status, time, category, image, doctorId },
}) => {
  const navigation = useNavigation<StackNavigation | any>();
  return (
    <View className="border border-medics_green rounded-lg h-auto p-[15px]">
      <View className="flex-row justify-between">
        <View>
          <Text className="text-lg font-semibold text-primaryDark">
            Dr. {doctor}
          </Text>
          <Text className="text-xs font-medium text-medics_gray">
            {category}
          </Text>
        </View>
        <View>
          <Image
            source={{
              uri: image,
            }}
            className="w-[47px] h-[49px] rounded-full"
          />
        </View>
      </View>
      <View className="flex-row items-center justify-between pt-[20px] w-[260px] gap-[10px]">
        <View className="flex-row items-center gap-[4px]">
          <EvilIcons name="calendar" size={20} color="#555555" />
          <Text className="text-xs text-[#555] font-medium">{date}</Text>
        </View>
        <View className="flex-row items-center gap-[4px]">
          <Feather name="clock" size={20} color="#555555" />
          <Text className="text-xs text-[#555] font-medium">{time}</Text>
        </View>
        <View className="flex-row items-center gap-[4px]">
          <View
            className={`w-[8px]  h-[8px] rounded-full ${
              status === "completed"
                ? "bg-green-500"
                : status === "upcoming"
                ? "bg-orange-400"
                : "bg-red-500"
            }`}
          />
          <Text className="text-xs text-[#555] font-medium capitalize">
            {status}
          </Text>
        </View>
      </View>
      {status === "completed" ? null : (
        <View className="flex-row gap-x-[40px] mt-[14px]">
          {status === "canceled" ? null : (
            <TouchableOpacity className="w-[146px] h-[46px] items-center justify-center bg-medics_green rounded-lg">
              <Text className="text-sm font-semibold text-[#555]">Cancel</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("booking", {
                id: doctorId,
                date: date,
                time: time,
              })
            }
            className="w-[146px] h-[46px] items-center justify-center bg-primary rounded-lg"
          >
            <Text className="text-sm font-semibold text-white">Reschedule</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
