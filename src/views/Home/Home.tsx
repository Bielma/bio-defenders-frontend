import React from "react";
import { View, Text, Image } from "react-native";
import { HomeStyles } from "./constants";
import Header from "../../components/Header";
import BottomMenu from "../../components/BottomMenu";
import BookTouchable from "../../components/BookTouchable/BookTouchable";
import { frames } from "./constants";

const Home = () => {
  const onPress = () => {};
  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.headerContainer}>
        <Header />
      </View>

      <View style={HomeStyles.content}>
        <BookTouchable top={350} left={230} onPress={onPress} />
        <View style={HomeStyles.arbolContainer}>
          <Image source={frames.frame8} />
        </View>
      </View>

      <BottomMenu />
    </View>
  );
};

export default Home;
