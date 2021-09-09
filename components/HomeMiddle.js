import React from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
const data = [
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
    screen: "HeroScreen",
  },
  {
    id: "689",
    title: "Groceries",
    image: "https://i.imgur.com/9Kqwxql.png",
    screen: "HeroScreen",
  },
  {
    id: "111",
    title: "2-wheels",
    image:
      "https://cdn.pixabay.com/photo/2021/04/06/03/20/delivery-6155160_960_720.png",
    screen: "HeroScreen",
  },
  {
    id: "222",
    title: "Reserve",
    image: "https://i.imgur.com/pg8dPUT.png",
    screen: "HeroScreen",
  },
];
const HomeMiddle = () => {
  return (
    <SafeAreaView style={tw`border-b border-gray-200`}>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item: { title, image, screen } }) => (
          <TouchableOpacity style={tw`p-2 `}>
            <View style={tw`items-center bg-gray-200 rounded-xl p-2 mb-2`}>
              <Image
                style={{ width: 50, height: 50, resizeMode: "contain" }}
                source={{ uri: image }}
              />
            </View>
            <View style={tw`items-center mt-2`}>
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
