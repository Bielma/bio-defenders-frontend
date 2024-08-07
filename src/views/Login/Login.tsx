import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View, Image, TouchableHighlight } from "react-native";
import { LoginStyles } from "./constants";
import StyleText from "../../components/StyleText.jsx";
import theme from "../../theme";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Login = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const isEndedSurvey = async () => {
    const onBoarding = await AsyncStorage.getItem("onboardingDone");
    return onBoarding === "true";
  };

  const startSurvey = async () => {
    const surveyEnded = await isEndedSurvey();
    surveyEnded
      ? navigation.dispatch(StackActions.replace("Home"))
      : navigation.dispatch(StackActions.replace("Start"));
  };

  return (
    <View style={LoginStyles.container}>
      <Image source={require("../../../assets/señora_con_plantita_1.png")} />

      <StyleText tipo="titulo1" style={{}}>
        Inicia Sesión
      </StyleText>
      <StyleText tipo="titulo1" style={{}}>
        o regístrate
      </StyleText>
      {/* <Text style={styles.title}>Inicia Sesión o regístrate</Text> */}
      <TextInput style={LoginStyles.input} placeholder={"Email"} />
      <TextInput
        style={LoginStyles.input}
        placeholder={"Contraseña"}
        secureTextEntry={true}
      />
      <TouchableHighlight
        style={LoginStyles.primaryButton}
        activeOpacity={0.6}
        underlayColor={theme.colors.white}
        onPress={startSurvey}
      >
        <Text
          style={{ color: "#F7F7F7", textAlign: "center", fontWeight: "bold" }}
        >
          CONTINUAR
        </Text>
      </TouchableHighlight>
      <StyleText tipo="subTitulo2" style={{}}>
        o usar
      </StyleText>

      <TouchableHighlight
        style={LoginStyles.googleButton}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../../assets/iconlogo_google.png")}
            style={LoginStyles.logo}
          />
          <StyleText tipo="textoBoton" style={{ textAlign: "center" }}>
            {" "}
            Iniciar sesión con Google
          </StyleText>
        </View>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
};

export default Login;
