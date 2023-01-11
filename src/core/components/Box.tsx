import React from "react";
import {
  FlexAlignType,
  StyleProp,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";

type Spacing = number | "view" | "card";

interface BoxProps extends ViewProps {
  m?: Spacing;
  mt?: Spacing;
  mb?: Spacing;
  mr?: Spacing;
  ml?: Spacing;

  p?: Spacing;
  pt?: Spacing;
  pb?: Spacing;
  pr?: Spacing;
  pl?: Spacing;

  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | undefined;
  alignItems?: FlexAlignType;

  flex?: number;

  customStyle?: ViewStyle;
}

function Box(props: BoxProps) {
  const style: StyleProp<ViewStyle> = {
    margin: props.m,
    marginTop: props.mt,
    marginBottom: props.mb,
    marginRight: props.mr,
    marginLeft: props.ml,

    padding: props.p,
    paddingTop: props.pt,
    paddingBottom: props.pb,
    paddingRight: props.pr,
    paddingLeft: props.pl,

    justifyContent: props.justifyContent,
    alignItems: props.alignItems,

    flex: props.flex,

    ...props.customStyle,
  };

  return <View {...props} style={style} />;
}

export default Box;
