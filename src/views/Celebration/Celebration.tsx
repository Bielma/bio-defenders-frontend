import React from "react";
import { Image, Text, TouchableHighlight, View } from "react-native";
import StyleText from "../../components/StyleText";
import { ButtonStyles } from "../../components/StyleButton";
import { CelebrationStyles } from "./constants";

const Celebration = () => {
  return (
    <View style={CelebrationStyles.container}>
      <View style={CelebrationStyles.fireworksContainer}>
        <Image source={require("../../../assets/fuegos_artificiales.png")} />
      </View>
      <View style={CelebrationStyles.birdsContainer}>
        <Image source={require("../../../assets/birds.png")} />
      </View>

      <Image source={require("../../../assets/icon_mundo.png")} />
      <StyleText tipo="titulo3" style={CelebrationStyles.title}>
        Lección Completada!
      </StyleText>
      <TouchableHighlight
        style={[ButtonStyles.primaryButton, CelebrationStyles.continueButton]}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => alert("Continuar!")}
      >
        <StyleText
          tipo={"textoBoton"}
          style={{ color: "#FFFFFF", textAlign: "center" }}
        >
          CONTINUAR
        </StyleText>
      </TouchableHighlight>
    </View>
  );
};

export default Celebration;
