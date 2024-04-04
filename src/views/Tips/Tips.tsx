import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { TipsStyles } from "./constants";
import theme from "../../theme";
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
    getRecommendations();
  }, []);

  const getCategoryColor = (categoria: string) => {
    switch (categoria) {
      case "alimentación":
        return theme.colors.secondaryThree;
      case "movilidad":
        return theme.colors.secondaryFive;
      case "energía":
        return theme.colors.primaryEleven;
      case "residuos":
        return theme.colors.neutroEel;
      default:
        return theme.colors.primaryFour;
    }
  };

  return (
    <View style={TipsStyles.container}>
      <View style={HomeStyles.headerContainer}>
        <Header />
      </View>
      <SafeAreaView style={TipsStyles.content}>
        <ScrollView>
          {tips.map((tip, index) => (
            <View key={index} style={TipsStyles.card}>
              <Text>{tip.recomendacion}</Text>
              <View style={{ paddingVertical: "3%" }}>
                <Text style={{ fontWeight: "bold" }}>{tip.alcance}</Text>
              </View>

              <View
                style={{
                  backgroundColor: getCategoryColor(tip.categoria),
                  padding: "1%",
                  width: "30%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
              >
                <Text style={{ color: theme.colors.white, fontWeight: "bold" }}>
                  {tip.categoria}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>

      <View style={{ flex: 0.1 }}>
        <BottomMenu screenName="Home" />
      </View>
    </View>
  );
};

export default Tips;
