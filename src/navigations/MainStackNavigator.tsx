import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PATHS from "navigations/PATHS.json";

import MapScreen from "features/map/screens/MapScreen";

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator initialRouteName={PATHS.Map}>
      <Stack.Screen
        name={PATHS.Map}
        component={MapScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
