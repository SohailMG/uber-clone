import { useNavigation } from "@react-navigation/core";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "http://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order Food",
    image: "http://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
    const navigation = useNavigation()
  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { title, image, screen } }) => (
        <TouchableOpacity onPress={() =>navigation.navigate(screen)} style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{title}</Text>
            <Icon style={tw`p-2 bg-black rounded-full w-10 mt-4`} name="arrowright" color="white" type="antdesign" />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
