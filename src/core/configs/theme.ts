import { CreateThemeOptions, createTheme } from "@rneui/themed";

const theme: CreateThemeOptions = createTheme({
  lightColors: {},
  darkColors: {
    primary: "#7F4CD2",
    secondary: "#FFCF0D",
  },
  mode: "dark",
});

export default theme;
