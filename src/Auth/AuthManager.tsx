import React, { useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";
interface IAuthManagerProps {
  children: ReactNode;
}

const AuthManager = (props: IAuthManagerProps) => {
  const navigation = useNavigation<NavigationProp<any>>();

  const getTokens = async () => {
    const token = await AsyncStorage.getItem("token");
    return token;
  };

  useEffect(() => {
    getTokens().then((token) => {
      if (!token) {
        navigation.dispatch(StackActions.replace("Home"));
      }
    });
  }, []);

  return <>{props.children}</>;
};

export default AuthManager;
