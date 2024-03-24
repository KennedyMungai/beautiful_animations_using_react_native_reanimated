import { Stack } from 'expo-router';
import React from 'react';

const MainPageLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default MainPageLayout;
