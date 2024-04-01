import { StyleSheet } from "react-native";

export const CelebrationStyles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fireworksContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
  },
  birdsContainer: {
    marginTop: -60,
    marginRight: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
  },
  title: {
    marginTop: 35,
  },
  continueButton: {
    marginTop: 35,
  },
});
