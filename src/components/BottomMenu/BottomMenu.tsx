import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { BottomMenuStyles } from "./constants";
import { Icon } from "@rneui/base";
import theme from "../../theme";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";

interface IBottomMenuProps {
  screenName: string;
}

const BottomMenu = ({ screenName }: IBottomMenuProps) => {
  const navigation = useNavigation<NavigationProp<any>>();
  const homeColor =
    screenName === "Home" ? theme.colors.rgbBackground : theme.colors.white;
  const plantsStoreColor =
    screenName === "PlantsStore"
      ? theme.colors.rgbBackground
      : theme.colors.white;

  const retosColor =
    screenName === "Retos" ? theme.colors.rgbBackground : theme.colors.white;

  return (
    <View style={BottomMenuStyles.container}>
      <TouchableOpacity
        style={{
          width: "33.3%",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("Home")}
      >
        <Icon name="home" color={homeColor} />
        <Text style={[BottomMenuStyles.text, { color: homeColor }]}>
          Inicio
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "33.3%",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("PlantsStore")}
      >
        <Icon
          name="sprout"
          type="material-community"
          color={plantsStoreColor}
        />
        <Text style={[BottomMenuStyles.text, { color: plantsStoreColor }]}>
          Plantas
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "33.3%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name="trophy" type="material-community" color={retosColor} />
        <Text style={[BottomMenuStyles.text, { color: retosColor }]}>
          Retos
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomMenu;
