import React from "react";
import { PermissionStatus } from "expo-location";

import LinearGradientContainer from "core/components/LinearGradientContainer";
import ScrollContainer from "core/components/ScrollContainer";
import SafeAreaContainer from "core/components/SafeAreaContainer";
import Content from "core/components/Content";
import Box from "core/components/Box";
import Text from "core/components/Text";
import Button from "core/components/Button";

import LocationPermissionImage from "features/locations/components/LocationPermissionImage";

interface LocationPermissionScreenProps {
  status: PermissionStatus;
  requestLocationPermission: () => void;
}

function LocationPermissionScreen({
  status,
  requestLocationPermission,
}: LocationPermissionScreenProps) {
  const title =
    status === PermissionStatus.DENIED
      ? "Ops, as permissões de localização foi negada"
      : "Primeiro, precisamos acessar a localização";
  const description =
    status === PermissionStatus.DENIED
      ? "⚠️ Sua localização ajuda nosso sistema a mapear seu endereço atual e os dados climáticos da sua região. Você deve permitir que o app possa acessar sua localização."
      : "☀️ Sua localização ajuda nosso sistema a mapear seu endereço atual e os dados climáticos da sua região.";

  return (
    <LinearGradientContainer>
      <ScrollContainer>
        <SafeAreaContainer>
          <Content>
            <Box justifyContent="center" alignItems="center">
              <LocationPermissionImage />
            </Box>

            <Box flex={1} pr={24}>
              <Text
                h2={status === PermissionStatus.DENIED}
                h3={status === PermissionStatus.UNDETERMINED}
              >
                {title}
              </Text>
              <Text>{description}</Text>
            </Box>

            {status === PermissionStatus.UNDETERMINED && (
              <Button onPress={requestLocationPermission}>Solicitar</Button>
            )}
          </Content>
        </SafeAreaContainer>
      </ScrollContainer>
    </LinearGradientContainer>
  );
}

export default LocationPermissionScreen;
