import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { NAVIGATION_SCREEN } from "./constants";
import Login from "../views/Login";
import Home from "../views/Home";

const Stack = createNativeStackNavigator();
const NavigationStacks = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default NavigationStacks;
