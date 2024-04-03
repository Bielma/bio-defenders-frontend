import { StyleSheet } from "react-native";

export const InitialSurveyStyles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  BarContainer: {
    borderRadius: 10,
    marginTop: "7%",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  bar: {
    height: 20,
    backgroundColor: "#333",
    borderRadius: 10,
  },
  section: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 58,
    marginTop: "5%",
    borderWidth: 2,
    borderRadius: 16,
    borderColor: "#E5E5E5",
    backgroundColor: "#F7F7F7",
  },
});
