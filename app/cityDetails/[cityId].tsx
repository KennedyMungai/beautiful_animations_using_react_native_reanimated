import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';

import { Cities } from '~/assets/cities';

const CityDetails = () => {
  const { cityId } = useLocalSearchParams();

  const cityDetails = Cities.find((city) => city.id === Number(cityId));

  return (
    <SafeAreaView className="bg-white flex-1">
      <Image source={{ uri: cityDetails?.image }} className="w-full h-[400]" />
      <View>
        <Text>CityDetails</Text>
      </View>
    </SafeAreaView>
  );
};

export default CityDetails;
