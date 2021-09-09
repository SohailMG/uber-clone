import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectOrigin } from "../slices/navSlice";
const data1 = [
  {
    id: "123",
    title: "Ride",
    image: "http://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Food",
    image: "http://links.papareact.com/28w",
    screen: "HomeScreen",
  },
  {
    id: "689",
    title: "Groceries",
    image: "https://i.imgur.com/9Kqwxql.png",
    screen: "HomeScreen",
  },
  {
    id: "111",
    title: "2-wheels",
    image:
      "https://cdn.pixabay.com/photo/2021/04/06/03/20/delivery-6155160_960_720.png",
    screen: "HomeScreen",
  },
];
const data2 = [
  {
    id: "222",
    title: "Reserve",
    image: "https://i.imgur.com/pg8dPUT.png",
    screen: "HomeScreen",
  },
  {
    id: "333",
    title: "Tranist",
    image: "https://i.imgur.com/FaX3HJe.png",
    screen: "HomeScreen",
  },
];
const HomeMiddle = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <SafeAreaView style={tw`border-b border-gray-200`}>
      <FlatList
        data={data1}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item: { title, image, screen } }) => (
          <TouchableOpacity
            style={tw`p-4 `}
            onPress={() => navigation.navigate(screen)}
            disabled={!origin}
          >
            <View style={tw`items-center bg-gray-200 rounded-xl p-2`}>
              <Image
                style={{ width: 40, height: 40, resizeMode: "contain" }}
                source={{ uri: image }}
              />
            </View>
            <View style={tw`items-center mt-2`}>
              <Text style={tw`mb-2`}>{title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <FlatList
        data={data2}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item: { title, image, screen } }) => (
          <TouchableOpacity
            style={tw`p-4 `}
            onPress={() => navigation.navigate(screen)}
            disabled={!origin}
          >
            <View style={tw`items-center bg-gray-200 rounded-xl p-2 mb-2`}>
              <Image
                style={{ width: 40, height: 40, resizeMode: "contain" }}
                source={{ uri: image }}
              />
            </View>
            <View style={tw`items-center`}>
              <Text style={tw`mb-2`}>{title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default HomeMiddle;

const styles = StyleSheet.create({});
