import { View, Text } from "react-native";
import React from "react";
import StyleText from "../components/StyleText.jsx";

export default function SignUp() {
  return (
    <View>
      <StyleText tipo="textoBioDefenders" style={{}}>
        Texto Biodefenders
      </StyleText>
      <StyleText tipo="titulo1" style={{}}>
        Titulo 1 estilo
      </StyleText>
      <StyleText tipo="titulo2" style={{}}>
        Titulo 2 estilo
      </StyleText>
      <StyleText tipo="titulo3" style={{}}>
        Titulo 3 estilo
      </StyleText>
      <StyleText tipo="subTitulo1" style={{}}>
        Subtitulo 1 estilo
      </StyleText>
      <StyleText tipo="subTitulo2" style={{}}>
        Subtitulo 2 estilo
      </StyleText>
      <StyleText tipo="textoInput" style={{}}>
        Texto input
      </StyleText>
      <StyleText tipo="textoBoton" style={{}}>
        Texto botones
      </StyleText>
      <StyleText tipo="textoGeneral" style={{}}>
        Texto general estilo
      </StyleText>
    </View>
  );
}
