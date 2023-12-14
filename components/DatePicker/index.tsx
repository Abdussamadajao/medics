import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Date from "./Date";
import moment from "moment";

type Props = {
  isDateSelected: any | null;
  onDateSelect: any;
};

const DatePicker = ({ isDateSelected, onDateSelect }: Props) => {
  const [dates, setDates] = useState<any | Date>([]);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [currentMonth, setCurrentMonth] = useState<any>();

  const getDates = () => {
    const _dates = [];
    for (let i = 0; i < 20; i++) {
      const date = moment().add(i, "days");
      _dates.push(date);
    }
    setDates(_dates);
  };

  const getCurrentMonth = () => {
    const month = moment(dates[0])
      .add(scrollPosition / 60, "days")
      .format("MMMM");
    setCurrentMonth(month);
  };
  useEffect(() => {
    getDates();
    getCurrentMonth();
  }, [scrollPosition]);

  return (
    <View className="mt-[30px]">
      <View className="justify-center items-center">
        <Text className="text-primaryDark text-lg font-semibold">
          {currentMonth}
        </Text>
      </View>

      <View className="w-full px-[9px] border-b  pb-[40px] border-medicalGray_1">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={(e) => setScrollPosition(e.nativeEvent.contentOffset.x)}
        >
          {dates.map((date: any, index: number) => (
            <Date
              key={index}
              date={date}
              onDateSelect={onDateSelect}
              selected={isDateSelected}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default DatePicker;
