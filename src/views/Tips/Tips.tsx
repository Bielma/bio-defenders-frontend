import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { TipsStyles } from "./constants";

import { HomeStyles } from "../Home/constants";
import BottomMenu from "../../components/BottomMenu";
import Header from "../../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface Tip {
  recomendacion: string;
  fuente: string;
  alcance: string;
  categoria: string;
}
const Tips = () => {
  const [tips, setTips] = useState<Tip[]>([]);
  useEffect(() => {
    //get recommendations from async storage

    // Function to get recommendations from async storage
    const getRecommendations = async () => {
      try {
        const recommendations = await AsyncStorage.getItem("recommendations");

        if (recommendations !== null) {
          setTips(JSON.parse(recommendations));
        }
      } catch (error) {
        console.log(
          "Error retrieving recommendations from async storage:",
          error
        );
      }
    };

    // Call the function to get recommendations
    getRecommendations();
  }, []);
  return (
    <View style={TipsStyles.container}>
      <View style={HomeStyles.headerContainer}>
        <Header />
      </View>
      <View style={TipsStyles.content}>
        {tips.map((tip, index) => (
          <View key={index} style={TipsStyles.card}>
            <Text>{tip.recomendacion}</Text>
            <Text>{tip.fuente}</Text>
            <Text>{tip.alcance}</Text>
            <Text>{tip.categoria}</Text>
          </View>
        ))}
      </View>

      <View style={{ flex: 0.1 }}>
        <BottomMenu screenName="Home" />
      </View>
    </View>
  );
};

export default Tips;
