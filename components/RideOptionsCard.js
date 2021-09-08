import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Image } from "react-native";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "Uber-X-12",
    title: "UberX",
    multiplier: 1,
    image: "http://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-34",
    title: "Uber XL",
    multiplier: 1.2,
    image: "http://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-56",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "http://links.papareact.com/7pf",
  },
];

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={[
            tw`top-3 left-5 z-50 p-3 rounded-full`,
            { position: "absolute" },
          ]}
        >
          <Icon name="chevron-left" type="font-awesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-lg`}>Select a ride</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { title, multiplier, image, id }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row items-center justify-between px-10 ${
              id === selected?.id && "bg-gray-200"
            }`}
          >
            <Image
              source={{ uri: image }}
              style={{ width: 100, height: 100, resizeMode: "contain" }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>Travel Time</Text>
            </View>
            <Text style={tw`text-lg`}>£99</Text>
          </TouchableOpacity>
        )}
      />

      {/* TODO Start with button at bottom timestamp:11628 */}
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
