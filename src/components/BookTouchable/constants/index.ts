import { StyleSheet } from "react-native";
import theme from "../../../theme";
export const BookTouchableStyles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 1,
  },
  buttonStyles: {
    backgroundColor: theme.colors.primaryThree,
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 1,
  },
  shadowButton: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: theme.colors.primaryOne,
  },
  buttonContainer: {
    justifyContent: "center",
  },
});
