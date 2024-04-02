import React, { useEffect, useState } from "react";
import { Animated, Text, View } from "react-native";
import { InitialSurveyStyles } from "./constants";
import ProgressBar from "../../components/ProgressBar";
import { Dimensions } from "react-native";
import Boton from "../../components/Boton";
interface Question {
  question: string;
  options: string[];
}
const InitialSurvey = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [progress, setProgress] = useState<number>(0.8);

  const handlePress = () => {
    setProgress((prevProgress) => prevProgress + 0.1);
  };

  return (
    <View style={InitialSurveyStyles.container}>
      <ProgressBar progress={progress} />
      <Text>Initial Survey</Text>
      <Boton
        tipoTexto="titulo1"
        textStyles={{ textAlign: "center", color: "white" }}
        onPress={handlePress}
        textValue="Continuar"
      />
    </View>
  );
};

export default InitialSurvey;
