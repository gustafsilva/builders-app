import Styled from "styled-components/native";
import BottomSheetGH from "@gorhom/bottom-sheet";
import theme from "core/configs/theme";

export const BottomSheet = Styled(BottomSheetGH).attrs({
  index: 1,
  snapPoints: ["20%", "38%"],
  backgroundStyle: {
    backgroundColor: "#622FB5",
  },
  handleIndicatorStyle: {
    backgroundColor: theme.darkColors?.secondary,
  },
})`
`;
