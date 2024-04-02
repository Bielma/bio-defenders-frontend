import { StyleSheet } from "react-native";

export const InitialSurveyStyles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  BarContainer: {
    backgroundColor: "#ccc",
    borderRadius: 10,
    margin: 10,
    width: "80%",
  },
  bar: {
    height: 20,
    backgroundColor: "#333",
    borderRadius: 10,
  },
});
