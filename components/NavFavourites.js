import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import tw from "tailwind-react-native-classnames";



const data = [
  {
    id: "12",
    icon: "home",
    location: "Home",
    destination: "Example Street,London,Uk",
  },
  {
    id: "34",
    icon: "briefcase",
    location: "Work",
    destination: "London Bridge,London,Uk",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={()=>(
          <View style={[tw`bg-gray-300`,{height:0.5}]}/>
      )}
      renderItem={({ item: { icon, location, destination } }) => (
        <TouchableOpacity 

        style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
              <Text style={tw`font-semibold text-lg`}>{location}</Text>
              <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
