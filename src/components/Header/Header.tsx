import { View, TextInput, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@rneui/base";
import theme from "../../theme";
import { HeaderComponentStyles } from "./constants";
////import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Sidebar from "../../views/Sidebar";
//const Stack = createNativeStackNavigator();

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isFocused, setFocus] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = (value: boolean) => {
    setSidebarOpen(value);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={HeaderComponentStyles.sidebarStyles}>
        <Sidebar
          isOpen={isSidebarOpen}
          handleClose={closeSidebar}
          nameScreen="Home"
        />
      </View>
      <View style={HeaderComponentStyles.headerContainer}>
        <SafeAreaView style={HeaderComponentStyles.row}>
          <TouchableOpacity onPress={toggleSidebar}>
            <Icon
              name="menu-outline"
              type="ionicon"
              color={theme.colors.black}
              size={30}
            />
          </TouchableOpacity>

          <Icon
            name="notifications-outline"
            type="ionicon"
            color={theme.colors.black}
            size={30}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}
