import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";
import {
  Barbell,
  Camera,
  ChevenRight,
  Fire,
  HeartBear,
} from "../../constants/icons";
import { profileData } from "../../utils/data";
import { IProfile } from "../../utils/types";
import CustomModal from "../../components/Modal";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/slice/authSlice";

const Profile = () => {
  return (
    <View className='flex-1 bg-[#52D1C6]'>
      <View className='relative flex-1'>
        <ImageBackground
          source={{
            uri: "https://res.cloudinary.com/dtczskyoz/image/upload/v1695210882/medical-kit/Group_119_r0qdco.png",
          }}
          resizeMode='cover'
          style={{ flex: 1, height: "100%", paddingTop: 50 }}>
          <View className='items-center '>
            <View className='relative'>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/dtczskyoz/image/upload/v1695210584/medical-kit/Ellipse_27_ozv7qa.png",
                }}
                className='w-[100px] h-[100px]'
              />
              <TouchableOpacity className='absolute bottom-0 right-0 items-center justify-center w-6 h-6 bg-white rounded-full'>
                <Camera fontSizeAdjust={100} />
              </TouchableOpacity>
            </View>
            <Text className='mt-[19px] text-white text-[18px] font-semibold'>
              Amelia Renata
            </Text>
            <View className='flex-row px-[50px]  mt-[30px]'>
              <View className='pr-[37px] border-r border-[#C1F3EF] items-center'>
                <HeartBear />
                <View className='items-center'>
                  <Text className='text-[10px] text-white'>Heart rate</Text>
                  <Text className='text-base font-semibold text-white'>
                    215bpm
                  </Text>
                </View>
              </View>
              <View className='px-[40px] border-r border-[#C1F3EF] items-center'>
                <Fire />
                <View className='items-center'>
                  <Text className='text-[10px] text-white'>Calories</Text>
                  <Text className='text-base font-semibold text-white'>
                    756cal
                  </Text>
                </View>
              </View>
              <View className='pl-[30px] items-center'>
                <Barbell />
                <View className='items-center'>
                  <Text className='text-[10px] text-white'>Weight</Text>
                  <Text className='text-base font-semibold text-white'>
                    103lbs
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View className='bg-white h-[370px] rounded-tr-[40px] rounded-tl-[40px] pt-[41px] px-[23px]'>
        {profileData.map((item: IProfile) => (
          <Card item={item} key={item.title} />
        ))}
      </View>
    </View>
  );
};

export default Profile;

const Card: React.FC<{ item: IProfile }> = ({ item: { Icon, title } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          title === "Logout" ? setIsModalOpen(true) : "";
        }}
        className='border-b h-[50px] border-medicalGray-2 mb-[20px] last:border-b-0 px-2'>
        <View className='flex-row items-center'>
          <Icon />
          <Text className='flex-1 ml-3'>{title}</Text>
          <ChevenRight />
        </View>
      </TouchableOpacity>
      <CustomModal
        onPress={() => setIsModalOpen(false)}
        onLogout={() => dispatch(logout())}
        open={isModalOpen}
        title='Are you sure to log out of your account?'
        logout
      />
    </>
  );
};
