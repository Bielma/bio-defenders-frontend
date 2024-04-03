import React from "react";
import { View, Text } from "react-native";
import { HomeStyles } from "./constants";
import Header from "../../components/Header";
import BottomMenu from "../../components/BottomMenu";

const Home = () => {
  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.headerContainer}>
        <Header />
      </View>
      <BottomMenu />
    </View>
  );
};

export default Home;
