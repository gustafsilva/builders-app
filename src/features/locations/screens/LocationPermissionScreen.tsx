import React from "react";
import { PermissionStatus } from "expo-location";
import { Button } from "@rneui/base";
import { Text } from "@rneui/themed";

import SafeAreaContainer from "core/components/SafeAreaContainer";
import Content from "core/components/Content";
import ScrollContainer from "core/components/ScrollContainer";
import Box from "core/components/Box";

interface LocationPermissionScreenProps {
  status: PermissionStatus;
  requestLocationPermission: () => void;
}

function LocationPermissionScreen({
  status,
  requestLocationPermission,
}: LocationPermissionScreenProps) {
  return (
    <ScrollContainer>
      <SafeAreaContainer>
        <Content>
          {status === PermissionStatus.DENIED ? (
            <Text h3>Permissões de localização negada</Text>
          ) : (
            <>
              <Box flex={1}>
                <Text h3>Primeiro, precisamos acessar a localização</Text>
                <Text h4>
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
  );
}

export default LocationPermissionScreen;
