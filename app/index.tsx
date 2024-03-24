import React from 'react';
import { View, Text, SafeAreaView, FlatList, Image } from 'react-native';

import { Cities } from '~/assets/cities';

const MainAppPage = () => {
  return (
    <SafeAreaView className="flex-1 bg-white px-2 pt-12">
      <View className="flex items-center justify-center pb-8">
        <FlatList
          data={Cities}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <Text className="text-center text-2xl text-neutral-700 font-bold  ">
              Some of our finest destinations
            </Text>
          )}
          numColumns={2}
          renderItem={({ item }) => (
            <View className="m-1">
              <Image
                source={{ uri: item.image }}
                className="w-52 h-52 rounded-md"
                resizeMode="cover"
              />
              <Text className="text-xl font-bold text-neutral-600">{item.name}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default MainAppPage;
