import React from "react";
import Styled from "styled-components";
import { Text as TextRNE } from "@rneui/base";

interface TextProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;

  children: string;
}

const TextInner = Styled(TextRNE).attrs({
  h1Style: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 72,
  },
  h2Style: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 32,
  },
  h3Style: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 28,
  },
  h4Style: {
    fontFamily: "Poppins-SemiBold",
    fontWeight: "500",
  },
})`
  font-family: Poppins-Regular;
  font-size: 16px;
  color: white;
`;

function Text(props: TextProps) {
  return <TextInner {...props} />;
}

export default Text;
