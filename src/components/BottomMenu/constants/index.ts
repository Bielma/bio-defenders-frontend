import { StyleSheet } from "react-native";
import theme from "../../../theme";

export const BottomMenuStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primaryFour,
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  text: {
    fontSize: 20,
  },
});
