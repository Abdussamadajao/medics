import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { IMenu } from "../../utils/types";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../constants/layouts";

type Props = {
  menu: IMenu;
};

const Menu = ({ menu: { Icon, content, route } }: Props) => {
  const navigation = useNavigation<StackNavigation | any>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(route)}
      className="items-center"
    >
      <Icon />
      <Text className="text-sm text-medical">{content}</Text>
    </TouchableOpacity>
  );
};

export default Menu;
