import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import React, { useRef } from "react";

//@ts-ignore
// import Check from "../../assets/check.svg";
import { Ionicons } from "@expo/vector-icons";
type checkboxProps = {
  isChecked: boolean;
  onPress: any;
};

const CheckBox = ({ isChecked, onPress }: checkboxProps) => {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    const toValue = isChecked ? 0 : 25;
    Animated.timing(animatedWidth, {
      toValue: toValue,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <TouchableOpacity
      onPress={() => {
        startAnimation();
        onPress();
      }}
      style={[styles.checkBox, isChecked && styles.checkboxSelected]}>
      <Animated.View style={{ width: animatedWidth, alignItems: "center" }}>
        <Ionicons name='checkmark' size={20} color='#199A8E' />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  checkBox: {
    width: 26,
    height: 26,
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: "#D3D6DA",
  },
  checkboxSelected: {
    backgroundColor: "transparent",
  },
});
