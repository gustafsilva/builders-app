import React from "react";
import {
  Button as ButtonRNE,
  ButtonProps as ButtonPropsRNE,
} from "@rneui/base";
import { useTheme } from "@rneui/themed";

interface ButtonProps extends ButtonPropsRNE {}

function Button(props: ButtonProps) {
  const { theme } = useTheme();

  const buttonStyle = {
    backgroundColor: theme.colors.primary,
    paddingVertical: 16,
    borderRadius: 16,
  };

  const titleStyle = {
    fontFamily: "Poppins-SemiBold",
  };

  return (
    <ButtonRNE
      buttonStyle={buttonStyle}
      titleStyle={titleStyle}
      uppercase
      {...props}
    />
  );
}

export default Button;
