import { useState } from "react";
import { useGetAllCategoriesQuery } from "../../../redux/queries/categories";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  Button,
} from "react-native";
import { SvgUri } from "react-native-svg";
import { CategoryAttributes } from "../../../utils/types";

const Categories = () => {
  const { data, isError, isLoading, refetch } = useGetAllCategoriesQuery();
  const categories: any = data?.data;
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);

    try {
      await refetch().unwrap();
    } catch (err) {
      console.error(err);
    } finally {
      setRefreshing(false);
    }
  };
  return (
    <View>
      {isLoading ? (
        <View className="mx-auto">
          <ActivityIndicator size={"large"} />
        </View>
      ) : isError ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          className="mt-[10px]"
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text className="text-center text-base w-[40%] mb-5 font-semibold">
            Something went wrong. Please try again.
          </Text>
          <Button title="Retry" onPress={() => handleRefresh()} />
        </ScrollView>
      ) : (
        <FlatList
          key={"_"}
          data={categories}
          renderItem={({ item }) => <Card item={item} />}
          keyExtractor={(item) => "_" + item?.id}
          numColumns={4}
          contentContainerStyle={{ gap: 11 }}
        />
      )}
    </View>
  );
};

export default Categories;

export const Card: React.FC<{ item: CategoryAttributes }> = ({ item }) => {
  const {
    attributes: { name, icon },
  } = item;

  return (
    <View className="items-center py-2 w-[90px]">
      <View className="mb-3">
        <SvgUri color={"red"} uri={icon?.data?.attributes?.url} fontSize={12} />
      </View>
      <Text className="text-[12px] capitalize font-medium">{name}</Text>
    </View>
  );
};
