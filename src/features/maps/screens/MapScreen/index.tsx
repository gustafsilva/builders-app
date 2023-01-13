import React from "react";

import LoadingScreen from "core/screens/LoadingScreen";
import Container from "core/components/Container";

import Map from "features/maps/components/Map";
import useLocation from "features/location/hooks/useLocation";
import WeatherBottomSheet from "features/weather/components/WeatherBottomSheet";

function MapScreen() {
  const { location, loading, requestCurrentPosition } = useLocation();

  React.useEffect(() => {
    requestCurrentPosition();
  }, [requestCurrentPosition]);

  if (loading || location === null) {
    return <LoadingScreen />;
  }

  return (
    <Container>
      <Map location={location} />
      <WeatherBottomSheet location={location} />
    </Container>
  );
}

export default MapScreen;
