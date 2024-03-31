import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Touchable, View, Image, TouchableHighlight } from 'react-native';
import StyleText from '../../components/StyleText.jsx';

export default function Login() {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/señora_con_plantita_1.png')} />

            <StyleText tipo='titulo1' style={styles.title}>Inicia Sesión</StyleText>
            <StyleText tipo='titulo1' style={styles.title2}>o regístrate</StyleText>
            {/* <Text style={styles.title}>Inicia Sesión o regístrate</Text> */}
            <TextInput style={styles.input} placeholder={"Email"} />
            <TextInput style={styles.input} placeholder={"Contraseña"} secureTextEntry={true} />
            <TouchableHighlight
                style={styles.primaryButton}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => alert('Continuar!')}>
                <Text style={{ color: "#F7F7F7", textAlign: "center", fontWeight: "bold" }}>CONTINUAR</Text>
            </TouchableHighlight>
            <TextInput tipo='subTitulo2'>o usar</TextInput>
            <TouchableHighlight
                style={styles.googleButton}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => alert('Pressed!')}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../../assets/iconlogo_google.png')} style={styles.logo} />
                    <StyleText  tipo='textoBoton' style={{ textAlign: 'center'}}> Iniciar sesión con Google</StyleText>
                </View>
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
    title: {
        marginTop: 10,
        marginBottom: 0,
    },
    title2: {
        marginTop: 0,
        marginBottom: 10,
    },
    input: {
        width: 310,
        height: 58,
        margin: 12,
        borderWidth: 2,
        borderRadius: 16,
        borderColor: '#E5E5E5',
        backgroundColor: '#F7F7F7',
        paddingLeft: 20,
    },
    primaryButton: {
        backgroundColor: '#58CC02',
        padding: 10,
        borderRadius: 16,
        width: 310,
        height: 58,
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 10,
        justifyContent: 'center',
        borderColor: "#58A700",
        borderWidth: 0,
        borderEndWidth: 0.1,
        borderStartWidth: 0.1,
        borderBottomWidth: 4,
    },
    logo: {
        width: 24,
        height: 24,
        marginRight: 24,
        marginLeft: 12,
    },
    googleButton: {
        marginTop: 10,
        backgroundColor: '#F7F7F7',
        padding: 10,
        borderRadius: 16,
        width: 310,
        height: 58,
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: "#E5E5E5",
        borderBottomWidth: 3,
    },
    shadowProp: {
        shadowColor: '#58A700',
        shadowOffset: { width: -2, height: -2 },
        shadowOpacity: 1,
        shadowRadius: 3,
    },
});
