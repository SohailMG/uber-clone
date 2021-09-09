import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import HomeMiddle from '../components/HomeMiddle';
import HomeTop from '../components/HomeTop';

const HeroScreen = () => {
    return (
      <View style={tw`flex-1`}>
        <View style={tw`flex-1`}>
          {/* TOP VIEW */}
          <HomeTop/>
          {/* Middle VIEW */}
          <HomeMiddle/>
          {/* Bottom VIEW */}
          <View></View>
        </View>
      </View>
    );
}

export default HeroScreen

const styles = StyleSheet.create({})
