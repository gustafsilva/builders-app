import React from "react";
import { observer } from "mobx-react-lite";

import LinearGradientContainer from "core/components/LinearGradientContainer";
import Container from "core/components/Container";
import Box from "core/components/Box";
import Spinner from "core/components/Spinner";
import Button from "core/components/Button";

import useWeatherBottomSheet from "features/weather/hooks/useWeatherBottomSheet";
import WeatherBasicInfo from "features/weather/components/WeatherBasicInfo";

import { BottomSheet } from "./WeatherBottomSheet.styles";

const WeatherBottomSheet = observer(() => {
  const {
    bottomSheetRef,
    weatherResumeStore,
    isOpen,
    refresh,
    moreInfo,
    handleSheetChanges,
  } = useWeatherBottomSheet();

  React.useEffect(() => {
    refresh();
  }, []);

  const footerStyle = {
    opacity: isOpen ? 1 : 0,
  };

  return (
    <BottomSheet ref={bottomSheetRef} onChange={handleSheetChanges}>
      <LinearGradientContainer>
        <Container>
          {weatherResumeStore.loading || weatherResumeStore.info === null ? (
            <Box flex={1} alignItems="center" mt={24}>
              <Spinner />
            </Box>
          ) : (
            <Box ph="view" flex={1}>
              <WeatherBasicInfo />

              <Box
                flex={1}
                mt={8}
                mb={32}
                justifyContent="flex-end"
                customStyle={footerStyle}
              >
                <Button onPress={refresh} size="lg">
                  Atualizar
                </Button>
                <Box mt={16}>
                  <Button onPress={moreInfo} size="lg" type="outline">
                    Mais informações
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        </Container>
      </LinearGradientContainer>
    </BottomSheet>
  );
});

export default WeatherBottomSheet;
