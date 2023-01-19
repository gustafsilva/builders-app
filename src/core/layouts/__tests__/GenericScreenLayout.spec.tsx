import React from "react";
import { Text } from "react-native";
import { render, screen } from "@testing-library/react-native";
import { ReactTestInstance } from "react-test-renderer";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@rneui/themed";

import GenericScreenLayout from "core/layouts/GenericScreenLayout";
import theme from "core/configs/theme";

const TEST_ID_OF_LAYOUT = "GenericScreenLayout";
const TEXT = "Container Children";
const CHILDREN = <Text>{TEXT}</Text>;

describe("🫀 Core | 🖼️ Layouts | *️⃣ <GenericScreenLayout>", function () {
  let genericScreenLayout: ReactTestInstance | null = null;

  describe("| without header", function () {
    beforeEach(function () {
      render(
        <GenericScreenLayout children={CHILDREN} testID={TEST_ID_OF_LAYOUT} />
      );

      genericScreenLayout = screen.getByTestId(TEST_ID_OF_LAYOUT);
    });

    it("should render successfully", () => {
      expect(genericScreenLayout).toBeDefined();
    });

    it("should render correctly", () => {
      const screenAsJson = screen.toJSON();
      expect(screenAsJson).toMatchSnapshot();
    });

    it("should render with children", () => {
      expect(screen.getByText(TEXT)).toBeTruthy();
    });
  });

  describe("| with header", function () {
    beforeEach(function () {
      render(
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <GenericScreenLayout
              children={CHILDREN}
              testID={TEST_ID_OF_LAYOUT}
              headerShown
            />
          </NavigationContainer>
        </ThemeProvider>
      );

      genericScreenLayout = screen.getByTestId(TEST_ID_OF_LAYOUT);
    });

    it("should render successfully", () => {
      expect(genericScreenLayout).toBeDefined();
    });

    it("should render correctly", () => {
      const screenAsJson = screen.toJSON();
      expect(screenAsJson).toMatchSnapshot();
    });

    it("should render with children", () => {
      expect(screen.getByText(TEXT)).toBeTruthy();
    });
  });
});
