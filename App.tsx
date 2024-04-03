import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import Constants from "expo-constants";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import Login from "./src/views/Login";
import Fuentes from "./src/views/Fuentes";
import SignUp from "./src/views/SignUp/SignUp";
import Bienvenida from "./src/views/Bienvenida/Bienvenida";
import Boton from "./src/components/Boton";
import { LoginStyles } from "./src/views/Login/constants";
import theme from "./src/theme";
import Home from "./src/views/Home";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    SplashScreen.preventAutoHideAsync().catch((err) => console.warn(err));

    loadFonts()
      .then(() => setFontsLoaded(true))
      .catch((err) => console.warn(err));
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  const handlePress = () => {
    alert("Continuar!");
  };
  {
    /* */
  }
  return <Home />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

async function loadFonts() {
  await Font.loadAsync({
    //nunito sans fonts
    "NunitoSans-Medium": require("./assets/fonts/NunitoSans_Medium.ttf"),
    "NunitoSans-Regular": require("./assets/fonts/NunitoSans_Regular.ttf"),
    "NunitoSans-Bold": require("./assets/fonts/NunitoSans_Bold.ttf"),
    "NunitoSans-SemiBold": require("./assets/fonts/NunitoSans_SemiBold.ttf"),
    "NunitoSans-ExtraBold": require("./assets/fonts/NunitoSans_ExtraBold.ttf"),
    "NunitoSans-Black": require("./assets/fonts/NunitoSans_Black.ttf"),
    //work sans fonts
    "WorkSans-Medium": require("./assets/fonts/WorkSans-Medium.ttf"),
    "WorkSans-Regular": require("./assets/fonts/WorkSans-Regular.ttf"),
    "WorkSans-Bold": require("./assets/fonts/WorkSans-Bold.ttf"),
    "WorkSans-SemiBold": require("./assets/fonts/WorkSans-SemiBold.ttf"),
    "WorkSans-ExtraBold": require("./assets/fonts/WorkSans-ExtraBold.ttf"),
    "WorkSans-Black": require("./assets/fonts/WorkSans-Black.ttf"),
    // Agrega aquí más fuentes si las necesitas
  });

  await SplashScreen.hideAsync();
}
