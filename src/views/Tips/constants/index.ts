import { StyleSheet } from "react-native";
import theme from "../../../theme";

export const TipsStyles = StyleSheet.create({
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
  card: {
    backgroundColor: theme.colors.white,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
