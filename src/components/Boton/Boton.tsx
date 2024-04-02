import {View, Text, TouchableHighlight, ViewStyle} from 'react-native'
import React from 'react'
import { TextStyle } from 'react-native'
import { LoginStyles } from '../../views/Login/constants'
import StyleText from '../StyleText'

interface IBotonProps {
   
    onPress: () => void;
    style:ViewStyle;
    tipoTexto: string;
    textStyles: any;
    activeOpacity: number;
    underlayColor: string;
    textValue: string;
}



const Boton = ({style, activeOpacity, underlayColor,textStyles,tipoTexto, onPress,textValue}:IBotonProps) => {
return (
    <TouchableHighlight
        style={style}
        activeOpacity={activeOpacity}
        underlayColor={underlayColor}
        onPress={onPress}
    >
        <StyleText
            tipo={tipoTexto}
            style={textStyles}
        >
            {textValue}
        </StyleText>
    </TouchableHighlight>
)
}
Boton.defaultProps = {
    style: LoginStyles.primaryButton,
    textStyles: {

    },
    activeOpacity: 0.6,
    underlayColor: "#DDDDDD",
    textValue: "CONTINUAR"
}



export default Boton