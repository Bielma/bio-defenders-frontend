import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Touchable, View, Image, TouchableHighlight } from 'react-native';

export default function Login() {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/señora_con_plantita_1.png')} />

            <Text style={styles.title}>Inicia Sesion o registrate</Text>
            <TextInput style={styles.input} placeholder={"Email"} />
            <TextInput style={styles.input} placeholder={"Contraseña"} />
            <TouchableHighlight
                style={styles.primaryButton}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => alert('Pressed!')}>
                <Text style={{ color: "#F7F7F7", textAlign: "center", fontWeight: "bold" }}>CONTINUAR</Text>
            </TouchableHighlight>
            <Text>O Usar</Text>
            <TouchableHighlight
                style={styles.googleButton}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => alert('Pressed!')}>
                <Text style={{ color: "gray", textAlign: 'center', fontWeight: "bold" }}> Iniciar sesion con Google</Text>
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
        fontSize: 28,
        margin: 20,
        color: '#4B4B4B',
        fontWeight: 'bold',
    },
    primaryButton: {
        backgroundColor: '#58CC02',
        padding: 10,
        borderRadius: 15,
        width: 270,
        height: 52,
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 10,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: "#58A700",
        borderBottomWidth: 3,
    },
    googleButton: {
        marginTop: 10,
        backgroundColor: '#F7F7F7',
        padding: 10,
        borderRadius: 15,
        width: 270,
        height: 52,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: "#E5E5E5",
        borderBottomWidth: 3,
    },
    input: {
        height: 52,
        width: 270,
        margin: 12,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#E5E5E5',
        backgroundColor: '#F7F7F7',
        paddingLeft: 20,
    },
    shadowProp: {
        shadowColor: '#58A700',
        shadowOffset: { width: -2, height: -2 },
        shadowOpacity: 1,
        shadowRadius: 3,
    },
});
