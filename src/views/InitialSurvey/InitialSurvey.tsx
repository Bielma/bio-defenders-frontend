import React, { useEffect, useState } from "react";
import { Animated, Text, TextInput, TextInputBase, View } from "react-native";
import { InitialSurveyStyles } from "./constants";
import ProgressBar from "../../components/ProgressBar";
import { Dimensions } from "react-native";
import Boton from "../../components/Boton";
import questionsJson from "../../constants/questions";
import StyleText from "../../components/StyleText";
import { LoginStyles } from "../../views/Login/constants";
interface Question {
  question: string;
  options: string[];
}
const InitialSurvey = () => {
  const [progress, setProgress] = useState<number>(0);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [questions, setQuestions] = useState<any>([
    {
      question: "¿Cuanto es tu gasto mensual de luz?",
      options: [],
      answer: "",
      type: "home",
      placeholder: "$100",
    },
    {
      question: "¿Usas cilindros de gas o gas estacionario?",
      options: ["Cilindro", "Estacionario"],
      answer: "",
      type: "home",
      subQuestions: {
        Cilindro: {
          question: "¿Cuántos cilindros de gas gastas al mes?",
          answer: "",
          placeholder: "2",
        },
        Estacionario: {
          question:
            "¿Aproximadamente cuánto gastas en gas estacionario al año?",
          answer: "",
          placeholder: "$1000",
        },
      },
    },

    {
      question: "¿Cuentas con climatizadores en casa?",
      options: ["Si", "No"],
      answer: "",
      type: "home",
      subQuestions: {
        Si: {
          question: "¿Aire acondicionado o calentador?",
          options: ["Aire", "Calentador"],
          subQuestions: {
            Calentador: [
              {
                question: "¿Qué tipo de calentador?",
                options: ["Gas", "Electrico", "Quemadores"],
                answer: "",
              },
              {
                question: "¿Por cuánto tiempo los utilizas?",
                answer: "",
                placeholder: "6 hrs",
              },
            ],
            Aire: [
              {
                question: "¿Por cuánto tiempo los utilizas?",
                answer: "",
                placeholder: "6 hrs",
              },
            ],
          },
        },
      },
    },
    {
      question: "¿Aproximadamente cuánta carne roja consumes a la semana?",
      options: [],
      answer: "",
      type: "consumo",
      placeholder: "1.200 kg",
    },
    {
      question: "¿Qué tipo de transporte frecuentemente utilizas?",
      options: ["Automóvil", "Transporte público", "Bicicleta"],
      answer: "",
      type: "consumo",
    },
  ]);

  useEffect(() => {}, [questionIndex]);

  const handlePress = () => {
    setQuestionIndex((prevquestionIndex) => prevquestionIndex + 1);
    if (questionIndex >= questions.length - 1) {
      alert("Continuar!");
      return;
    }
    setProgress((prevProgress) => prevProgress + 0.8 / (questions.length - 1));
  };

  const handleChange = (text: string) => {
    let _questions = [...questions];
    _questions[questionIndex].answer = text;
    setQuestions(_questions);
    console.log(questions[questionIndex].answer);
    if (questions[questionIndex].options.length > 0) {
      handlePress();
    }
  };
  return (
    <View style={InitialSurveyStyles.container}>
      <View style={InitialSurveyStyles.BarContainer}>
        <ProgressBar progress={progress} />
      </View>
      <View style={InitialSurveyStyles.questionSection}>
        <StyleText tipo={"titulo2"} style={{}}>
          {questions[questionIndex]?.question}
        </StyleText>
      </View>
      <View style={InitialSurveyStyles.optionsSecion}>
        {questions[questionIndex]?.options.length > 0 ? (
          questions[questionIndex]?.options.map(
            (option: string, index: number) => {
              return (
                <Boton
                  disabled={false}
                  style={LoginStyles.googleButton}
                  key={index}
                  tipoTexto="titulo3"
                  textStyles={{
                    textAlign: "center",
                  }}
                  onPress={() => {
                    handleChange(option);
                  }}
                  textValue={option}
                />
              );
            }
          )
        ) : (
          <TextInput
            placeholder={questions[questionIndex]?.placeholder}
            style={InitialSurveyStyles.input}
            value={questions[questionIndex]?.answer}
            onChangeText={handleChange}
            maxLength={10}
            keyboardType="numeric"
          />
        )}
      </View>
      <View style={InitialSurveyStyles.continueSection}>
        {questions[questionIndex]?.options.length === 0 && (
          <Boton
            style={
              questions[questionIndex].answer
                ? LoginStyles.primaryButton
                : LoginStyles.googleButton
            }
            disabled={!questions[questionIndex].answer}
            tipoTexto="titulo2"
            textStyles={{
              textAlign: "center",
              color: questions[questionIndex].answer ? "white" : "gray",
            }}
            onPress={handlePress}
            textValue="Continuar"
          />
        )}
      </View>
    </View>
  );
};

export default InitialSurvey;
