import React from "react";

import locationStore, { LocationStoreContext } from "features/location/store";
import LocationPermissionProvider from "features/location/providers/LocationPermissionProvider";

interface LocationProviderProps {
  children: React.ReactElement;
}

function LocationProvider({ children }: LocationProviderProps) {
  return (
    <LocationStoreContext.Provider value={locationStore}>
      <LocationPermissionProvider>{children}</LocationPermissionProvider>
    </LocationStoreContext.Provider>
  );
}

export default LocationProvider;
