import React from "react";
import { PermissionStatus } from "expo-location";

import ScrollScreenLayout from "core/layouts/ScrollScreenLayout";
import Content from "core/components/Content";
import Box from "core/components/Box";
import Text from "core/components/Text";
import Button from "core/components/Button";

import LocationPermissionImage from "features/location/components/LocationPermissionImage";

interface LocationPermissionScreenProps {
  status: PermissionStatus;
  requestLocationPermission: () => void;
  loading?: boolean;
}

function LocationPermissionScreen({
  status,
  requestLocationPermission,
  loading = false,
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
    <ScrollScreenLayout flexGrow={1} loading={loading}>
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
          <Button onPress={requestLocationPermission} size="lg">
            Solicitar
          </Button>
        )}
      </Content>
    </ScrollScreenLayout>
  );
}

export default LocationPermissionScreen;
