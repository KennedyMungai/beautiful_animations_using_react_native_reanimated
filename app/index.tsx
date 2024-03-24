import React from 'react';
import { View, Text, SafeAreaView, FlatList, Image } from 'react-native';

import { Cities } from '~/assets/cities';

const MainAppPage = () => {
  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-center px-2 pt-12">
      <View>
        <FlatList
          data={Cities}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <View>
              <Image source={{ uri: item.image }} className="aspect-video" />
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default MainAppPage;
