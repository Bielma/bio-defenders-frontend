import { useNavigation, NavigationProp } from "@react-navigation/native";

export const NAVIGATION_SCREEN = {
  LOGIN: "index",
  WELCOME: "Bienvenida",
  CELEBRATION: "Celebration",
  HOME: "Home",
  SIGNUP: "Signup",
  START: "Start",
};

export const navigation = useNavigation<NavigationProp<any>>();
