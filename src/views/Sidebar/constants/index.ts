import { useRef } from "react";
import { StyleSheet, Dimensions, Animated } from "react-native";
import theme from "../../../theme";
//import AsyncStorage from "@react-native-async-storage/async-storage";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
export const deleteToken = () => {
  try {
    //AsyncStorage.removeItem("@token");
  } catch (error) {
    throw error;
  }
};

export const iconSize = 16;
export const imageSource =
  "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg";

export const fadeItems = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = (callback: any) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      if (callback && typeof callback === "function") {
        callback();
      }
    });
  };
  return { fadeAnim, fadeIn, fadeOut };
};
export const sidebarStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.rgbBackground,
    height: screenHeight,
    width: screenWidth * 0.77,
    position: "absolute",
    display: "flex",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
  },
  porfileContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.white,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  imgContainer: {
    width: 93,
    height: 93,
    borderRadius: 53,
    marginBottom: "10%",
    marginTop: "20%",
    backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    color: theme.colors.naranjaDos,
    marginBottom: 7,
  },
  email: {
    fontSize: 10,
    color: theme.colors.naranjaDos,
    marginBottom: 25,
  },
  menuContainer: {
    justifyContent: "center",
    flex: 0.4,
    marginLeft: "8%",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "10%",
  },
  textItem: {
    fontSize: 16,
    marginLeft: "10%",
  },
  iconEditContainer: {
    position: "absolute",
    left: 68,
    top: 65,
    backgroundColor: theme.colors.white,
    borderRadius: 50,
    padding: 5,
  },
  background: {
    height: screenHeight,
    width: screenWidth,
    backgroundColor: theme.colors.rgbBackground,
  },
  textPorfileContainer: {
    alignSelf: "flex-start",
    marginLeft: "8%",
  },
});
