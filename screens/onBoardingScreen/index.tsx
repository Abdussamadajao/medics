import { View, Text, FlatList, Animated, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { OnBoardingData } from "../../utils/data";
import OnBoardingItem from "../../components/OnBoardingItem";
import { SafeAreaView } from "react-native-safe-area-context";
import Paginator from "../../components/OnBoardingItem/paginator";
//@ts-ignore
import ArrowRightIcon from "../../assets/arrowright";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../constants/layouts";
import { useAppDispatch } from "../../redux/hooks";
import { setOnBoarding } from "../../redux/slice/authSlice";

const OnBoardingScreen = () => {
  const dispatch = useAppDispatch();
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currrentIndex, setCurrrentIndex] = useState<number | any>(0);
  const slideRef = useRef<null | any>(null);
  const navigation = useNavigation<StackNavigation>();
  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrrentIndex(viewableItems[0]?.index ?? 0);
  });

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
    waitForInteraction: true,
    minimumViewTime: 5,
  });

  const onPressFinish = async () => {
    dispatch(setOnBoarding(true));
  };

  const scrollTo = async () => {
    if (currrentIndex < OnBoardingData.length - 1) {
      slideRef.current.scrollToIndex({ index: currrentIndex + 1 });
    } else {
      onPressFinish();
    }
  };

  return (
    <SafeAreaView className='h-screen justify-center w-[400px] bg-white'>
      <FlatList
        data={OnBoardingData}
        renderItem={({ item }) => (
          <OnBoardingItem item={item} scrollX={scrollX} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig.current}
        scrollEventThrottle={32}
        ref={slideRef}
        style={{ flex: 3, zIndex: 1000, gap: 20 }}
      />

      <Paginator data={OnBoardingData} scrollX={scrollX} />
      <TouchableOpacity
        onPress={scrollTo}
        className='bg-[#199A8E] absolute bottom-16 justify-center items-center rounded-full z-[1000] left-[65%] h-[56px] w-[56px]'>
        <ArrowRightIcon />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;
