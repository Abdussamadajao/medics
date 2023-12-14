import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { times } from "../../utils/data";

const TimePicker: React.FC<{
  isTimeSelected: any | null;
  setIsTimeSelected: (value: any) => void;
}> = ({ isTimeSelected, setIsTimeSelected }) => {
  const [timeList, setTimeList] = useState<any>([]);

  const getTime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }

    setTimeList(timeList);
  };

  useEffect(() => {
    getTime();
  }, []);

  return (
    <View className="pt-[30px] mb-[10px]">
      <FlatList
        key={"_"}
        data={timeList}
        renderItem={({ item }) => (
          <Card
            item={item}
            isTimeSelected={isTimeSelected}
            setIsTimeSelected={setIsTimeSelected}
          />
        )}
        // keyExtractor={(item) => "_"}
        numColumns={3}
        contentContainerStyle={{ gap: 11 }}
      />
    </View>
  );
};

export default TimePicker;

const Card: React.FC<{
  item: any;
  isTimeSelected: any | null;
  setIsTimeSelected: (value: any) => void;
}> = ({ item, isTimeSelected, setIsTimeSelected }) => {
  const handlePress = (time: string) => {
    if (isTimeSelected === time) {
      setIsTimeSelected(null);
    } else {
      setIsTimeSelected(time);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => handlePress(item?.time)}
      className={`${
        isTimeSelected === item?.time ? "bg-primary" : "bg-transparent"
      } border w-[116px] border-medics_gray_3 h-[37px] rounded-[15px] mx-1 justify-center items-center`}
    >
      <Text
        className={`${
          isTimeSelected === item?.time ? "text-white" : "text-black"
        }`}
      >
        {item.time}
      </Text>
    </TouchableOpacity>
  );
};
