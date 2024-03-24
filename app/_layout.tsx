import { Stack } from 'expo-router';
import React from 'react';

import '../global.css';

const MainPageLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTransparent: true, headerShown: false }} />
      <Stack.Screen
        name="cityDetails/[cityId]"
        options={{ headerShown: false, headerTransparent: true }}
      />
    </Stack>
  );
};

export default MainPageLayout;
