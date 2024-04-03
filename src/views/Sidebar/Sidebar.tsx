import React, { useEffect } from "react";
import { Icon } from "@rneui/base";
import { sidebarStyles } from "./constants";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "../../theme";
//import { GestureHandlerRootView } from "react-native-gesture-handler";
import { imageSource, fadeItems, iconSize, deleteToken } from "./constants";
//import { useNavigation } from "@react-navigation/native";
//import { StackActions } from "@react-navigation/native";
//import { NAVIGATION_SCREEN } from "../navigation/constants";
import {
  Text,
  View,
  Image,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

interface ISidebarProps {
  isOpen: boolean;
  handleClose?: (_b: boolean) => void;
  nameScreen: string;
}
const Sidebar = ({ isOpen, handleClose, nameScreen }: ISidebarProps) => {
  //const navigation = useNavigation<any>();
  const { fadeAnim, fadeIn, fadeOut } = fadeItems();

  const logout = () => {
    deleteToken();
    // navigation.dispatch(StackActions.replace(NAVIGATION_SCREEN.LOGIN));
  };
  const goToProfile = () => {
    //navigation.navigate(NAVIGATION_SCREEN.PROFILE);
  };

  const closeSidebar = () => {
    fadeOut(() => {
      if (handleClose) {
        handleClose(false);
      }
    });
  };

  useEffect(() => {
    if (isOpen) {
      fadeIn();
    }
  }, [fadeIn, isOpen]);

  const colorPorfile =
    nameScreen === "Porfile" ? theme.colors.naranjaUno : theme.colors.black;
  const colorHome =
    nameScreen === "Home" ? theme.colors.naranjaUno : theme.colors.black;
  const colorLogout =
    nameScreen === "Logout" ? theme.colors.naranjaUno : theme.colors.black;

  return (
    <View style={{ flex: 1 }}>
      {isOpen && (
        <Animated.View style={[{ opacity: fadeAnim }]}>
          <TouchableOpacity onPress={closeSidebar} activeOpacity={1}>
            <View style={sidebarStyles.background}>
              <Animated.View
                style={{
                  transform: [
                    {
                      translateX: fadeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-300, 0],
                      }),
                    },
                  ],
                }}
              >
                <TouchableWithoutFeedback>
                  <View style={sidebarStyles.container}>
                    <View style={sidebarStyles.porfileContainer}>
                      <View style={sidebarStyles.imgContainer}>
                        <Image
                          source={{ uri: imageSource }}
                          style={sidebarStyles.img}
                        />
                        <View style={sidebarStyles.iconEditContainer}>
                          <Icon
                            name="pencil"
                            type="material-community"
                            size={16}
                            color={theme.colors.white}
                          />
                        </View>
                      </View>
                      <View style={sidebarStyles.textPorfileContainer}>
                        <Text style={sidebarStyles.name}>Nick R. Bocker</Text>
                        <Text style={sidebarStyles.email}>
                          example@gmail.com
                        </Text>
                      </View>
                    </View>
                    <SafeAreaView style={sidebarStyles.menuContainer}>
                      <TouchableOpacity
                        style={sidebarStyles.itemContainer}
                        onPress={goToProfile}
                      >
                        <Icon
                          name="person-outline"
                          type="ionicon"
                          size={iconSize}
                          color={colorPorfile}
                        />
                        <Text
                          style={[
                            sidebarStyles.textItem,
                            { color: colorPorfile },
                          ]}
                        >
                          Profile
                        </Text>
                      </TouchableOpacity>

                      <View style={sidebarStyles.itemContainer}>
                        <Icon
                          name="home-outline"
                          type="ionicon"
                          size={iconSize}
                          color={colorHome}
                        />
                        <Text
                          style={[sidebarStyles.textItem, { color: colorHome }]}
                        >
                          Home
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={sidebarStyles.itemContainer}
                        onPress={logout}
                      >
                        <Icon
                          name="log-out-outline"
                          type="ionicon"
                          size={iconSize}
                          color={colorLogout}
                        />
                        <Text
                          style={[
                            sidebarStyles.textItem,
                            { color: colorLogout },
                          ]}
                        >
                          Logout
                        </Text>
                      </TouchableOpacity>
                    </SafeAreaView>
                  </View>
                </TouchableWithoutFeedback>
              </Animated.View>
            </View>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

Sidebar.defaultProps = {
  handleClose: undefined,
};

export default Sidebar;
