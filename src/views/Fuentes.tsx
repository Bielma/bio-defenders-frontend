import { View, Text } from 'react-native'
import React from 'react'
import StyleText from '../components/StyleText.jsx'

export default function SignUp() {
  return (
    <View>
      <StyleText tipo='textoBioDefenders'>Texto Biodefenders</StyleText>
      <StyleText tipo='titulo1'>Titulo 1 estilo</StyleText>
      <StyleText tipo='titulo2'>Titulo 2 estilo</StyleText>
      <StyleText tipo='titulo3'>Titulo 3 estilo</StyleText>
      <StyleText tipo='subTitulo1'>Subtitulo 1 estilo</StyleText>
      <StyleText tipo='subTitulo2'>Subtitulo 2 estilo</StyleText>
      <StyleText tipo='textoInput'>Texto input</StyleText>
      <StyleText tipo='textoBoton'>Texto botones</StyleText>
      <StyleText tipo='textoGeneral'>Texto general estilo</StyleText>
    </View>
  )
}