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
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectTravelTimeInfo } from "../slices/navSlice";

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

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInfo = useSelector(selectTravelTimeInfo);
  return (
    <View style={tw`bg-white flex-grow py-4`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={[
            tw` left-5 z-50 rounded-full top-3`,
            { position: "absolute" },
          ]}
        >
          <Icon name="chevron-left" type="font-awesome" />
        </TouchableOpacity>
        <Text style={tw`text-center text-lg py-3`}>
          Select a ride - {travelTimeInfo?.distance.text}
        </Text>
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
              <Text>{travelTimeInfo?.duration.text} Travel Time</Text>
            </View>
            <Text style={tw`text-lg`}>
              {new Intl.NumberFormat("en-gb", {
                style: "currency",
                currency: "GBP",
              }).format(
                (travelTimeInfo?.duration.value *
                  SURGE_CHARGE_RATE *
                  multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* TODO Start with button at bottom timestamp:11628 */}
      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
