import { StyleSheet } from "react-native";

export const InitialSurveyStyles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    paddingTop: "10%",
    paddingBottom: "10%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  BarContainer: {
    borderRadius: 10,
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  bar: {
    height: 20,
    backgroundColor: "#333",
    borderRadius: 10,
  },
  questionSection: {
    marginTop: "7%",
    width: "100%",
    alignItems: "center",
    flex: 1,
  },
  optionsSecion: {
    width: "100%",
    alignItems: "center",
    flex: 1,
  },
  continueSection: {
    width: "100%",
    alignItems: "center",
    flex: 1,
  },
  input: {
    paddingLeft: 20,
    width: "80%",
    height: 58,
    marginTop: "5%",
    borderWidth: 2,
    borderRadius: 16,
    borderColor: "#E5E5E5",
    backgroundColor: "#F7F7F7",
  },
});
