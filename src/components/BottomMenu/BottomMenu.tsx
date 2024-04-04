import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { BottomMenuStyles } from "./constants";
import { Icon } from "@rneui/base";
import theme from "../../theme";

const BottomMenu = () => {
  return (
    <View style={BottomMenuStyles.container}>
      <TouchableOpacity
        style={{
          width: "33.3%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name="home" color={theme.colors.white} />
        <Text style={BottomMenuStyles.text}>Inicio</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "33.3%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon
          name="text-box-search"
          type="material-community"
          color={theme.colors.white}
        />
        <Text style={BottomMenuStyles.text}>Artículos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "33.3%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon
          name="trophy"
          type="material-community"
          color={theme.colors.white}
        />
        <Text style={BottomMenuStyles.text}>Retos</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomMenu;
