import {
  View,
  Text,
  Modal,
  Animated,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
type ModalProps = {
  open?: boolean;
  actionText?: string;
  title?: string;
  onPress?: any;
  content?: string;
  icon?: any;
  logout?: any;
  onLogout?: any;
};

const CustomModal = ({
  open,
  actionText,
  onPress,
  title,
  content,
  icon,
  logout,
  onLogout,
}: ModalProps) => {
  const [showModal, setShowModal] = useState<any>(open);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  const toggleModal = () => {
    if (open) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        // duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  React.useEffect(() => {
    toggleModal();
  }, [open]);
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View className='max-w-[350px] pb-[38px] bg-white px-8 pt-[60px]  flex-col items-center justify-end rounded-[24px] h-[454px]'>
          <View className='w-[102px] h-[102px] bg-medicalGray-2 rounded-full items-center justify-center mb-[50px]'>
            {icon && <Ionicons name='checkmark' size={56} color='#199A8E' />}
            {logout && (
              <MaterialIcons name='logout' size={56} color='#199A8E' />
            )}
          </View>
          <Text className='text-xl font-bold text-center text-medicalBlack max-h-[100px] w-[263px] mb-[26px]'>
            {title}
          </Text>
          {content && (
            <Text className='text-center min-w-[290px] mb-[26px] text-medical text-base tracking-[0.5px] h-12'>
              {content}
            </Text>
          )}

          {actionText && (
            <TouchableOpacity
              onPress={onPress}
              className='h-14 w-[183px] bg-primary rounded-full items-center justify-center'>
              <Text className='text-base font-semibold text-white'>
                {actionText}
              </Text>
            </TouchableOpacity>
          )}

          {logout && (
            <TouchableOpacity
              onPress={onLogout}
              className='h-14 w-[183px] bg-primary rounded-full items-center justify-center mt-4'>
              <Text className='text-base font-semibold text-white'>Logout</Text>
            </TouchableOpacity>
          )}

          {logout && (
            <TouchableOpacity
              onPress={onPress}
              className='h-14 w-[183px] bg-transparent rounded-full items-center justify-center mt-4'>
              <Text className='text-base font-semibold text-primary'>
                Cancel
              </Text>
            </TouchableOpacity>
          )}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomModal;
