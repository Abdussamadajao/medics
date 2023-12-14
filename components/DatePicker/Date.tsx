import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";

type Props = {
  onDateSelect: any;
  date: Date;
  selected: any;
};

const Date = ({ date, onDateSelect, selected }: Props) => {
  /**
   * use moment to compare the date to today
   * if today, show 'Today'
   * if not today, show day of the week e.g 'Mon', 'Tue', 'Wed'
   */
  const day =
    moment(date).format("YYYY-MM-DD") === moment().format("YYYY-MM-DD")
      ? "Today"
      : moment(date).format("ddd");
  // get the day number e.g 1, 2, 3, 4, 5, 6, 7
  const dayNumber = moment(date).format("D");
  // get the full date e.g 2021-01-01 - we'll use this to compare the date to the selected date
  const fullDate = moment(date).format("YYYY-MM-DD");

  return (
    <TouchableOpacity
      onPress={() => onDateSelect(fullDate)}
      className={`bg-white border border-gray-100 h-[64px] rounded-[15px] w-[58px] p-[10px] mt-[10px] items-center mx-1 justify-center ${
        selected === fullDate ? "bg-primary" : "bg-transparent"
      } `}
    >
      <Text
        className={`${
          selected === fullDate ? "text-white" : " text-medical"
        } text-[10px]`}
      >
        {day}
      </Text>
      <View style={{ height: 2 }} />
      <Text
        className={`${
          selected === fullDate ? "text-white" : "text-black"
        } text-lg font-semibold`}
      >
        {dayNumber}
      </Text>
    </TouchableOpacity>
  );
};

export default Date;
