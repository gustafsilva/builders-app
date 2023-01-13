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
    backgroundColor:
      props.type === "outline" ? "rgba(0,0,0,0)" : theme.colors.primary,
    borderRadius: 16,
    borderColor: theme.colors.secondary,
    borderWidth: props.type === "outline" ? 0.8 : 0,
  };

  const titleStyle = {
    fontFamily: "Poppins-SemiBold",
    color:
      props.type === "outline" ? theme.colors.secondary : theme.colors.black,
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
