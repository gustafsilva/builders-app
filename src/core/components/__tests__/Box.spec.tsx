import React from "react";
import { Text } from "react-native";
import { render, screen } from "@testing-library/react-native";
import { ReactTestInstance } from "react-test-renderer";

import Box from "core/components/Box";

const TEST_ID_OF_BOX = "box";
const TEXT = "Box Children";
const CHILDREN = <Text>{TEXT}</Text>;

describe("🫀 Core | 🧩 Components | 📦 <Box>", function () {
  let box: ReactTestInstance | null = null;

  beforeEach(function () {
    render(<Box children={CHILDREN} testID={TEST_ID_OF_BOX} />);

    box = screen.getByTestId(TEST_ID_OF_BOX);
  });

  it("should render successfully", () => {
    expect(box).toBeDefined();
  });

  it("should render correctly", () => {
    const boxAsJson = screen.toJSON();
    expect(boxAsJson).toMatchSnapshot();
  });

  it("should render with title", () => {
    expect(screen.getByText(TEXT)).toBeTruthy();
  });
});
