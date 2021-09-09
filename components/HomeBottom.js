import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { selectOrigin, setDestination, setOrigin } from "../slices/navSlice";

const HomeBottom = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  const [isFocused, setisFocused] = useState(false);

  return (
    <SafeAreaView style={tw`mt-4`}>
      <View style={tw` bg-gray-200 ml-4 mr-4 flex-row  items-center`}>
        <GooglePlacesAutocomplete
          textInputProps={{
            onFocus: () => setisFocused(true),
            onBlur: () => setisFocused(false),
          }}
          styles={{
            container: {
              flex: 1,
            },
            textInput: {
              fontSize: 18,
              backgroundColor: "transparent",
            },
          }}
          fetchDetails={true}
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
              );
              dispatch(setDestination(null));
              navigation.navigate('MapScreen')
          }}
          returnKeyType="search"
          minLength={2}
          placeholder="Where from?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
        />

        {!isFocused && (
          <TouchableOpacity
            style={tw`mr-2 bg-white rounded-full flex-row items-center`}
          >
            <Icon name="time-outline" type="ionicon" style={tw`ml-2`} />
            <Text style={tw`p-2 px-4 `}>Now</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeBottom;

const styles = StyleSheet.create({});
