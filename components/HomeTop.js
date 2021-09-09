import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const HomeTop = () => {
  return (
    <View style={[tw`h-1/2 `, { backgroundColor: "#4CA05A" }]}>
      <SafeAreaView style={tw`flex `}>
        {/* TOP header */}
        <View style={tw`flex flex-row justify-between`}>
          <TouchableOpacity>
            <Icon
              name="menu"
              type="ionicon"
              style={[tw`ml-4 p-2`]}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[tw`rounded-full mr-4`, { backgroundColor: "#6EB580" }]}
          >
            <Text style={tw`p-3 text-white`}>£12.50</Text>
          </TouchableOpacity>
        </View>
        {/* Middle header */}
        <View style={[tw`p-6 mt-24`, { width: 330 }]}>
          <Text style={tw`font-bold text-white text-xl mb-4`}>
            Bring the shopping to you
          </Text>
          <Text style={tw`text-white`}>
            Get all the essentials delivered to your door on demand
          </Text>
          <TouchableOpacity style={[tw`bg-black rounded-full mt-6 w-40 px-4 `]}>
            <Text style={tw`text-white p-2 font-semibold`}>
              Order your shop
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeTop;

const styles = StyleSheet.create({});
