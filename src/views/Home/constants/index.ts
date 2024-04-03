import { StyleSheet } from "react-native";
import theme from "../../../theme";
export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  headerContainer: {
    zIndex: 1,
    position: "absolute",
    width: "100%",
    top: "5%",
  },
});
