import {
  View,
  Text,
  useWindowDimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Paginator: React.FC<{ data: any; scrollX: any }> = ({
  data,
  scrollX,
}) => {
  const { width } = useWindowDimensions();
  const size = 128;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  return (
    <View className='flex-row left-14 mx-auto absolute bottom-20 z-[1000] gap-1 w-full'>
      {data?.map((_: any, i: number) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX?.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            className='h-[4px] rounded-full w-[23px] bg-[#199A8E]'
            style={{ width: dotWidth, opacity: opacity }}
            key={i?.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;
