import { CreateThemeOptions, createTheme } from "@rneui/themed";

import { DARK_COLORS } from "./colors";

const theme: CreateThemeOptions = createTheme({
  darkColors: DARK_COLORS,
  mode: "dark",
});

export default theme;
