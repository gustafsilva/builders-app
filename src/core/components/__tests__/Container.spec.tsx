import React from "react";
import { Text } from "react-native";
import { render, screen } from "@testing-library/react-native";
import { ReactTestInstance } from "react-test-renderer";

import Container from "core/components/Container";

const TEST_ID_OF_CONTAINER = "CONTAINER";
const TEXT = "Container Children";
const CHILDREN = <Text>{TEXT}</Text>;

describe("🫀 Core | 🧩 Components | 🗄️ <Container>", function () {
  let container: ReactTestInstance | null = null;

  beforeEach(function () {
    render(<Container children={CHILDREN} testID={TEST_ID_OF_CONTAINER} />);

    container = screen.getByTestId(TEST_ID_OF_CONTAINER);
  });

  it("should render successfully", () => {
    expect(container).toBeDefined();
  });

  it("should render correctly", () => {
    const containerAsJson = screen.toJSON();
    expect(containerAsJson).toMatchSnapshot();
  });

  it("should render with title", () => {
    expect(screen.getByText(TEXT)).toBeTruthy();
  });
});
