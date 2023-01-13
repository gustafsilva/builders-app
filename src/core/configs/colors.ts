import "@rneui/themed";

declare module "@rneui/themed" {
  export interface Colors {
    tertiary: string;
  }
}

export const DEFAULT_COLORS = {
  primary: "#7F4CD2",
  secondary: "#FFCF0D",
  tertiary: "#622FB5",
};

export const DARK_COLORS = {
  ...DEFAULT_COLORS,
  background: "#1B0F36",
  black: "#FFFFFF",
};
