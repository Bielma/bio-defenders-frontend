import React from "react";
import { Image, Text, TouchableHighlight, View } from "react-native";
import { StartStyles } from "./constants";
import StyleText from "../../components/StyleText";
import { ButtonStyles } from "../../components/StyleButton";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";
const Start = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={StartStyles.container}>
      <Image source={require("../../../assets/abranzando_mundo_1.png")} />
      <StyleText tipo="titulo1" style={{ textAlign: "center" }}>
        Empecemos la aventura
      </StyleText>

      <StyleText
        tipo="subTitulo2"
        style={{ textAlign: "center", marginTop: 15 }}
      >
        Diviértete mejorando el mundo
      </StyleText>
      <TouchableHighlight
        style={[ButtonStyles.primaryButton, { marginTop: 35 }]}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate("Initial")}
      >
        <Text
          style={{ color: "#F7F7F7", textAlign: "center", fontWeight: "bold" }}
        >
          CONTINUAR
        </Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={[ButtonStyles.secondaryButton, { marginTop: 10 }]}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => alert("Pressed!")}
      >
        <StyleText tipo="textSecondary" style={{ textAlign: "center" }}>
          {" "}
          Ya tengo una cuenta
        </StyleText>
      </TouchableHighlight>
    </View>
  );
};

export default Start;
