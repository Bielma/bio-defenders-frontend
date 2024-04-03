import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { NAVIGATION_SCREEN } from "./constants";
import Login from "../views/Login";

const Stack = createNativeStackNavigator();
const NavigationStacks = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={NAVIGATION_SCREEN.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default NavigationStacks;
