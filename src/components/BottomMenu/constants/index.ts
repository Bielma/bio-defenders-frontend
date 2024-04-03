import { StyleSheet } from "react-native";
import theme from "../../../theme";

export const BottomMenuStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primaryFour,
    flexDirection: "row",
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: theme.colors.white,
  },
});
