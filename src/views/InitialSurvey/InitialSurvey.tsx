import React, { useEffect, useState } from "react";
import { Animated, Text, TextInput, TextInputBase, View } from "react-native";
import { InitialSurveyStyles } from "./constants";
import ProgressBar from "../../components/ProgressBar";
import { Dimensions } from "react-native";
import Boton from "../../components/Boton";
import questions from "../../constants/questions";
import StyleText from "../../components/StyleText";
import { LoginStyles } from "../../views/Login/constants";
interface Question {
  question: string;
  options: string[];
}
const InitialSurvey = () => {
  const [questionsHome, setQuestionsHome] = useState<Question[]>([]);
  const [progress, setProgress] = useState<number>(0);
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [responses, setResponses] = useState<string[]>([]);
  useEffect(() => {
    setQuestionsHome(questions.casa);
  }, []);
  const handlePress = () => {
    if (questionNumber === questionsHome.length - 1) {
      alert("Continuar!");
      return;
    }
    setProgress(
      (prevProgress) => prevProgress + 0.8 / (questionsHome.length - 1)
    );

    setQuestionNumber((prevQuestionNumber) => prevQuestionNumber + 1);
  };

  return (
    <View style={InitialSurveyStyles.container}>
      <View style={InitialSurveyStyles.BarContainer}>
        <ProgressBar progress={progress} />
      </View>
      <View style={InitialSurveyStyles.section}>
        <StyleText tipo={"titulo1"} style={{}}>
          {questionsHome[questionNumber]?.question}
        </StyleText>
      </View>
      <View style={InitialSurveyStyles.section}>
        {questionsHome[questionNumber]?.options.length > 0 ? (
          questionsHome[questionNumber]?.options.map((option, index) => {
            return (
              <Boton
                style={LoginStyles.googleButton}
                key={index}
                tipoTexto="titulo3"
                textStyles={{
                  textAlign: "center",
                  wcolor: "white",
                }}
                onPress={() => {
                  setResponses((prevResponses) => [...prevResponses, option]);
                  handlePress();
                }}
                textValue={option}
              />
            );
          })
        ) : (
          <TextInput style={InitialSurveyStyles.input} />
        )}
      </View>

      <Boton
        tipoTexto="titulo2"
        textStyles={{ textAlign: "center", color: "white" }}
        onPress={handlePress}
        textValue="Continuar"
      />
    </View>
  );
};

export default InitialSurvey;
