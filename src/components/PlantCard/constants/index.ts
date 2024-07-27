import { StyleSheet } from "react-native";
import theme from "../../../theme";
export const PlantCardStyles = StyleSheet.create({
  container: {
    padding: "8%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: "10%",
    marginHorizontal: "3%",
  },
});
