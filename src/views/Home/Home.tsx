import React from "react";
import { View, Text, Image } from "react-native";
import { HomeStyles, macetas } from "./constants";
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
        <BookTouchable top={330} left={85} onPress={onPress} />
        <BookTouchable top={240} left={80} onPress={onPress} />
        <BookTouchable top={225} left={260} onPress={onPress} />
        <BookTouchable top={160} left={125} onPress={onPress} />
        <BookTouchable top={50} left={255} onPress={onPress} />
        <BookTouchable top={40} left={178} onPress={onPress} />
        <BookTouchable top={90} left={130} onPress={onPress} />
        <View style={HomeStyles.arbolContainer}>
          <Image source={frames.frame8} style={{ marginLeft: 40 }} />
          <Image source={macetas.maceta1} />
        </View>
      </View>
      <View style={{ flex: 0.1 }}>
        <BottomMenu screenName="Home" />
      </View>
    </View>
  );
};

export default Home;
