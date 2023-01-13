import React from "react";
import { StyleSheet } from "react-native";
import { Text as TextRNE, TextProps as TextPropsRNE } from "@rneui/base";
import { useTheme } from "@rneui/themed";

import FONTS from "core/configs/FONTS.json";

interface TextProps extends TextPropsRNE {
  label?: boolean;
}

function Text(props: TextProps) {
  const { theme } = useTheme();

  const customStyle = {
    fontFamily: props.label === true ? FONTS.SEMI_BOLD : FONTS.REGULAR,
    fontSize: props.label === true ? 14 : 16,
    color: props.label === true ? theme.colors.secondary : theme.colors.black,
  };

  return (
    <TextRNE
      {...props}
      h1Style={styles.h1Style}
      h2Style={styles.h2Style}
      h3Style={styles.h3Style}
      h4Style={styles.h4Style}
      style={customStyle}
    />
  );
}

const styles = StyleSheet.create({
  h1Style: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: 48,
  },
  h2Style: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: 32,
  },
  h3Style: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: 24,
  },
  h4Style: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: 16,
  },
});

export default Text;
