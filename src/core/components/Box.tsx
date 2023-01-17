import React from "react";
import {
  FlexAlignType,
  StyleProp,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";

import {
  Spacing,
  calculateSpacing,
  calculateSpacingInNumber,
} from "core/helpers/spacing";

interface BoxProps extends ViewProps {
  m?: Spacing;
  mt?: Spacing;
  mb?: Spacing;
  mr?: Spacing;
  ml?: Spacing;
  mv?: Spacing;
  mh?: Spacing;

  p?: Spacing;
  pt?: Spacing;
  pb?: Spacing;
  pr?: Spacing;
  pl?: Spacing;
  pv?: Spacing;
  ph?: Spacing;

  height?: Spacing | string;
  width?: Spacing | string;
  border?: Spacing;
  borderRadius?: Spacing;
  opacity?: number;

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
  direction?: "column" | "row";

  backgroundColor?: string;

  customStyle?: ViewStyle;
}

function Box(props: BoxProps) {
  const style: StyleProp<ViewStyle> = {
    margin: calculateSpacing(props.m),
    marginTop: calculateSpacing(props.mt),
    marginBottom: calculateSpacing(props.mb),
    marginRight: calculateSpacing(props.mr),
    marginLeft: calculateSpacing(props.ml),
    marginVertical: calculateSpacing(props.mv),
    marginHorizontal: calculateSpacing(props.mh),

    padding: calculateSpacing(props.p),
    paddingTop: calculateSpacing(props.pt),
    paddingBottom: calculateSpacing(props.pb),
    paddingRight: calculateSpacing(props.pr),
    paddingLeft: calculateSpacing(props.pl),
    paddingVertical: calculateSpacing(props.pv),
    paddingHorizontal: calculateSpacing(props.ph),

    height: calculateSpacing(props.height),
    width: calculateSpacing(props.width),
    borderWidth: calculateSpacingInNumber(props.border),
    borderRadius: calculateSpacingInNumber(props.borderRadius),
    opacity: calculateSpacingInNumber(props.opacity),

    justifyContent: props.justifyContent,
    alignItems: props.alignItems,

    flex: props.flex,
    flexDirection: props.direction,

    backgroundColor: props.backgroundColor,

    ...props.customStyle,
  };

  return <View {...props} style={style} />;
}

export default Box;
