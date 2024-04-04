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
  coinsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
    padding: "2%",
    borderRadius: 15,
    marginBottom: "3%",
  },
});
