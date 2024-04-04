import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { NAVIGATION_SCREEN } from "./constants";
import Login from "../views/Login";
import Home from "../views/Home";
import SignUp from "../views/Fuentes";
import Start from "../views/Start/Start";
import InitialSurvey from "../views/InitialSurvey/InitialSurvey";

const Stack = createNativeStackNavigator();
const NavigationStacks = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Initial" component={InitialSurvey} />
    </Stack.Navigator>
  );
};

export default NavigationStacks;
