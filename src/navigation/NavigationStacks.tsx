import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { NAVIGATION_SCREEN } from "./constants";
import Login from "../views/Login";
import Home from "../views/Home";
import SignUp from "../views/Fuentes";
import Start from "../views/Start/Start";
import InitialSurvey from "../views/InitialSurvey/InitialSurvey";
import PlantsStore from "../views/PlantsStore";
import { Icon } from "@rneui/base";
import theme from "../theme";
import Tips from "../views/Tips";

const Stack = createNativeStackNavigator();
const NavigationStacks = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Initial" component={InitialSurvey} />
      <Stack.Screen name="Tips" component={Tips} />
      <Stack.Screen
        name="PlantsStore"
        component={PlantsStore}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitleAlign: "center",
          headerLeft: () => (
            <SafeAreaView>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  name="chevron-left"
                  type="material-community"
                  size={30}
                  color={theme.colors.black}
                />
              </TouchableOpacity>
            </SafeAreaView>
          ),
          headerStyle: {
            backgroundColor: theme.colors.white,
          },
          headerTitleStyle: {
            fontSize: 22,
          },
          headerShadowVisible: false,
          headerTitle: "Tienda",
        })}
      />
    </Stack.Navigator>
  );
};

export default NavigationStacks;
