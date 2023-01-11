import React from "react";
import { SvgXml } from "react-native-svg";

import locationPermissionImage from "features/locations/assets/imgs/locationPermissionImage.svg";

function LocationPermissionImage() {
  return <SvgXml width="321px" height="445px" xml={locationPermissionImage} />;
}

export default LocationPermissionImage;
