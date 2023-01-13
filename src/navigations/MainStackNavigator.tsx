import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PATHS from "navigations/PATHS.json";

import MapScreen from "features/map/screens/MapScreen";
import WeatherResumeScreen from "features/weather/screens/WeatherResumeScreen";

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
      <Stack.Screen
        name={PATHS.WeatherResume}
        component={WeatherResumeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
