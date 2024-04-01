import { StyleSheet } from "react-native";
import theme from "../../../theme";

export const CelebrationStyles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  imageContainer: {
    width: "100%",
    display: "flex",
    flex: 0.5,
  },
  birdsImage: {
    left: "15%",
    top: "50%",
  },
  fireworksImage: {
    position: "absolute",
    top: "10%",
    right: "5%",
  },
  fireworksContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
  },
  birdsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    // flexDirection: "row",
    // position: "absolute",
    // left: "20%",
    // top: "25%",
    // width: "100%",
  },
  title: {
    marginTop: 35,
  },
  continueButton: {
    marginTop: "15%",
  },
  CardContainer: {
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderRadius: 40,
    marginTop: "6%",
  },
  CardBody: {
    marginTop: "4%",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    padding: "10%",
  },
});
