import React from "react";
import { observer } from "mobx-react-lite";

import GenericScreenLayout from "core/layouts/GenericScreenLayout";

import Map from "features/map/components/Map";

import { useLocationStore } from "features/location/store";
import WeatherBottomSheet from "features/weather/components/WeatherBottomSheet";
import { ViewProps } from "react-native";

const MapScreen = observer((props: ViewProps) => {
  const { currentPositionStore } = useLocationStore();

  React.useEffect(() => {
    currentPositionStore.refresh();
  }, []);

  return (
    <GenericScreenLayout statusBarStyle="dark" safeArea={false} {...props}>
      <React.Fragment>
        <Map coords={currentPositionStore.coords} />
        <WeatherBottomSheet />
      </React.Fragment>
    </GenericScreenLayout>
  );
});

export default MapScreen;
