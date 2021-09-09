import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import tw from "tailwind-react-native-classnames";
import HomeMiddle from "../components/HomeMiddle";
import HomeTop from "../components/HomeTop";
import HomeBottom from "../components/HomeBottom";
import NavFavourites from "../components/NavFavourites";
const HomeScreen = () => {
  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1`}>
        {/* TOP VIEW */}
        <HomeTop />
        {/* Middle VIEW */}
        <HomeMiddle />
        {/* Bottom VIEW */}
        <View>
          <HomeBottom />
        </View>
        <NavFavourites />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
