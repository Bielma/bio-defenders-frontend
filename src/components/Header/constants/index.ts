import { useState } from "react";
import { StyleSheet } from "react-native";
import theme from "../../../theme";
export const HeaderComponentStyles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.4,
    borderRadius: 5,
    marginHorizontal: "6%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  inputStyle: {
    height: 20,
    width: 230,
    color: theme.colors.white,
    paddingHorizontal: 10,
    backgroundColor: "transparent",
  },
  sidebarStyles: { position: "absolute", zIndex: 1 },
  headerContainer: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
  },
});
