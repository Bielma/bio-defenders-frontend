import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Touchable, View, Image, TouchableHighlight } from 'react-native';
import StyleText from '../../components/StyleText.jsx';



export default function Login() {
    return (
        <View style={styles.container}>

            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#FFFFFF70"
                onPress={() => alert('Se cambio tu avatar')}>
                <Image 
                    source={require('../../../assets/señora_con_plantita_1.png')} 
                    style={styles.image}
                />
            </TouchableHighlight>
            <StyleText tipo='subTitulo1' style={styles.avatarText}>avatar</StyleText>
            <StyleText style={styles.inputLabel} tipo='textoInput'>nombre</StyleText>
            <TextInput style={styles.input} placeholder={"ingresa tu nombre"} placeholderTextColor="#D5D5D5"/>
            <StyleText style={styles.inputLabel} tipo='textoInput'>username</StyleText>
            <TextInput style={styles.input} placeholder={"ingresa tu username"} placeholderTextColor="#D5D5D5"/>
            <StyleText style={styles.inputLabel} tipo='textoInput'>email</StyleText>
            <TextInput style={styles.input} placeholder={"ingresa tu email"} placeholderTextColor="#D5D5D5"/>
            <StyleText style={styles.inputLabel} tipo='textoInput'>contraseña</StyleText>
            <TextInput style={styles.input} placeholder={"ingresa tu contraseña"} placeholderTextColor="#D5D5D5" secureTextEntry={true}/>
            <TouchableHighlight
                style={styles.primaryButton}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => alert('Cuenta creada!')}>
                <Text style={{ color: "#1CB0F6", textAlign: "center", fontWeight: "bold" }}>CREAR CUENTA</Text>
            </TouchableHighlight>
            <StatusBar style="auto" />

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        marginTop : 30,
        width: 130, // o el tamaño que desees
        height: 130, // o el tamaño que desees
        borderRadius: 100, // la mitad del tamaño de la imagen para hacerla completamente redonda
        resizeMode: 'cover', // para ajustar la imagen
        borderWidth: 4,
        borderColor: '#E5E5E5',

    },
    avatarText: {
        marginTop: 8,
        marginBottom: 18,
    },
    input: {
        width: 310,
        height: 62,
        marginTop: 4,
        marginBottom: 12,
        borderWidth: 2,
        borderRadius: 16,
        borderColor: '#E5E5E5',
        backgroundColor: '#F7F7F7',
        paddingLeft: 20,
    },
    inputLabel:{
        width: 310,
        margin: 0,
    },
    primaryButton: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 16,
        width: 310,
        height: 58,
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 30,
        justifyContent: 'center',
        borderColor: "#E5E5E5",
        borderWidth: 1,
        borderEndWidth: 2,
        borderStartWidth: 2,
        borderBottomWidth: 4,
    }
});
