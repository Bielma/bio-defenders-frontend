import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
    textoBioDefenders: {
        color: theme.colors.colorLogo,
        fontSize: theme.fontSizes.tituloNombreProyecto,
        fontFamily: theme.fonts.workSansBold
    },
    titulo1: {
        color: theme.colors.neutroEel,
        fontSize: theme.fontSizes.titulo1,
        fontFamily: theme.fonts.nunitoSansBlack,
    },
    titulo2: {
        color: theme.colors.neutroEel,
        fontSize: theme.fontSizes.titulo3,
        fontFamily: theme.fonts.nunitoSansExtraBold,
    },
    titulo3: {
        color: theme.colors.secondaryThree,
        fontSize: theme.fontSizes.titulo2,
        fontFamily: theme.fonts.workSansBold,
    },
    subTitulo1: {
        color: theme.colors.neutroHare,
        fontSize: theme.fontSizes.subTitulo1,
        fontFamily: theme.fonts.nunitoSansBlack,
    },
    subTitulo2: {
        color: theme.colors.neutroWolf,
        fontSize: theme.fontSizes.subTitulo3,
        fontFamily: theme.fonts.nunitoSansRegular,
    },
    textoGeneral: {
        color: theme.colors.colorNegro,
        fontSize: theme.fontSizes.textoGeneral,
        fontFamily: theme.fonts.nunitoSansRegular,
    },
    textoInput: {
        color: theme.colors.colorInput,
        fontSize: theme.fontSizes.textoInput,
        fontFamily: theme.fonts.nunitoSansBold,
    },
    textoBoton: {
        color: theme.colors.colorBoton,
        fontSize: theme.fontSizes.textoBoton,
        fontFamily: theme.fonts.nunitoSansBold
    },
    textSecondary: {
        color: theme.colors.secondaryOne,
        fontSize: theme.fontSizes.textoBoton,
        fontFamily: theme.fonts.nunitoSansBold
    }

})

export default function StyleText({ children, style, tipo, ...restOfProps }) {
    const textStyles = [
        tipo === 'textoBioDefenders' && styles.textoBioDefenders,
        tipo === 'titulo1' && styles.titulo1,
        tipo === 'titulo2' && styles.titulo2,
        tipo === 'titulo3' && styles.titulo3,
        tipo === 'subTitulo1' && styles.subTitulo1,
        tipo === 'subTitulo2' && styles.subTitulo2,
        tipo === 'textoGeneral' && styles.textoGeneral,
        tipo === 'textoInput' && styles.textoInput,
        tipo === 'textoBoton' && styles.textoBoton,
        tipo === 'textSecondary' && styles.textSecondary,
        style,  // Asegúrate de que 'style' sea el último para que pueda sobrescribir los estilos anteriores si es necesario
    ]

    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}