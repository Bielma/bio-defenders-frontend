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
              color={theme.colors.white}
              size={25}
            />
          </TouchableOpacity>
          <View
            style={[
              { borderColor: isFocused ? theme.colors.white : "transparent" },
              HeaderComponentStyles.inputContainer,
            ]}
          >
            <TextInput
              style={HeaderComponentStyles.inputStyle}
              placeholderTextColor="white"
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
            />
          </View>
          <Icon
            name="search"
            type="ionicon"
            color={theme.colors.white}
            size={25}
            style={{ paddingRight: 5, fontWeight: "bold" }}
          />
          <Icon
            name="notifications-outline"
            type="ionicon"
            color={theme.colors.white}
            size={25}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}
