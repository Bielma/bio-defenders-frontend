import { StyleSheet } from "react-native";
import theme from "../../../theme";

export const frames = {
  frame1: require("../../../../assets/frames/framePlanta_01.jpg"),
  frame2: require("../../../../assets/frames/framePlanta_02.jpg"),
  frame3: require("../../../../assets/frames/framePlanta_03.jpg"),
  frame4: require("../../../../assets/frames/framePlanta_04.jpg"),
  frame5: require("../../../../assets/frames/framePlanta_05.jpg"),
  frame6: require("../../../../assets/frames/framePlanta_06.jpg"),
  frame7: require("../../../../assets/frames/framePlanta_07.jpg"),
  frame8: require("../../../../assets/frames/framePlanta_08.jpg"),
};

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
