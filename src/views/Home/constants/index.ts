import { StyleSheet } from "react-native";
import theme from "../../../theme";

export const frames = {
  frame1: require("../../../../assets/frames/version_gratuita/plantas/version_01/frame01_v1.png"),
  frame2: require("../../../../assets/frames/version_gratuita/plantas/version_01/frame02_v1.png"),
  frame3: require("../../../../assets/frames/version_gratuita/plantas/version_01/frame03_v1.png"),
  frame4: require("../../../../assets/frames/version_gratuita/plantas/version_01/frame04_v1.png"),
  frame5: require("../../../../assets/frames/version_gratuita/plantas/version_01/frame05_v1.png"),
  frame6: require("../../../../assets/frames/version_gratuita/plantas/version_01/frame06_v1.png"),
  frame7: require("../../../../assets/frames/version_gratuita/plantas/version_01/frame07_v1.png"),
  frame8: require("../../../../assets/frames/version_gratuita/plantas/version_01/frame08_v1.png"),
};
//frames/version_gratuita/plantas/version_01/frame01_v1.png
export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  content: {
    flex: 0.8,
    justifyContent: "center",
  },
  arbolContainer: {
    height: "90%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headerContainer: {
    zIndex: 1,
    position: "absolute",
    width: "100%",
    top: 0,
  },
});
