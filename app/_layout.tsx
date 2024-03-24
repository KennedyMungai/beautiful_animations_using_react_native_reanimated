import { Ionicons } from '@expo/vector-icons';
import { Stack, useNavigation } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import '../global.css';

const MainPageLayout = () => {
  const navigation = useNavigation();

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTransparent: true, headerShown: false }} />
      <Stack.Screen
        name="cityDetails/[cityId]"
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity>
              <Ionicons
                name="chevron-back"
                size={30}
                className="bg-white/80 rounded-full p-2"
                onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};

export default MainPageLayout;
