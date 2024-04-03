import React from "react";
import { View, Text } from "react-native";
import { HomeStyles } from "./constants";
import Header from "../../components/Header";

const Home = () => {
  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.headerContainer}>
        <Header />
      </View>

      <Text>Home</Text>
    </View>
  );
};

export default Home;
