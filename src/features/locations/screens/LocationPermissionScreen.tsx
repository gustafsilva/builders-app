import React from "react";
import { PermissionStatus } from "expo-location";
import { LinearGradient } from "expo-linear-gradient";

import SafeAreaContainer from "core/components/SafeAreaContainer";
import Content from "core/components/Content";
import ScrollContainer from "core/components/ScrollContainer";
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
  return (
    <LinearGradient colors={["#622FB5", "#1B0F36"]} style={{ flex: 1 }}>
      <ScrollContainer>
        <SafeAreaContainer>
          <Content>
            <Box justifyContent="center" alignItems="center">
              <LocationPermissionImage />
            </Box>
            {status === PermissionStatus.DENIED ? (
              <Text h3>Permissões de localização negada</Text>
            ) : (
              <>
                <Box flex={1} pr={24}>
                  <Text h2>Primeiro, precisamos acessar a localização</Text>
                  <Text>
                    Sua localização ajuda nosso sistema a mapear seu endereço
                    atual e os dados climáticos da sua região.
                  </Text>
                </Box>
                <Button onPress={requestLocationPermission}>Solicitar</Button>
              </>
            )}
          </Content>
        </SafeAreaContainer>
      </ScrollContainer>
    </LinearGradient>
  );
}

export default LocationPermissionScreen;
