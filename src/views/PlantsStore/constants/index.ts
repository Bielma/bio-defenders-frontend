import { StyleSheet } from "react-native";
import theme from "../../../theme";

export const PlantsStoreStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: theme.colors.gray,
  },
  row: {
    flexDirection: "row",
  },
});
