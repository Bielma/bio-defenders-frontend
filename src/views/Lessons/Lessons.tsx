import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { HomeStyles } from "../Home/constants";
import Header from "../../components/Header";
import InitialSurvey from "../InitialSurvey/InitialSurvey";
import { InitialSurveyStyles } from "../InitialSurvey/constants";
import Boton from "../../components/Boton";
import { LoginStyles } from "../Login/constants";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const Lessons = () => {
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const navigation = useNavigation<NavigationProp<any>>();
  const questions = [
    {
      question: "¿Qué causa principalmente el calentamiento global?",
      options: [
        "a) La rotación de la Tierra",
        "b) La actividad volcánica",
        "c) Las emisiones de gases de efecto invernadero",
        "d) La lluvia ácida",
      ],
      answer: "c) Las emisiones de gases de efecto invernadero",
    },
    {
      question:
        "¿Cuál de las siguientes NO es una consecuencia del cambio climático?",
      options: [
        "a) Aumento del nivel del mar",
        "b) Disminución de la capa de ozono",
        "c) Olas de calor más intensas",
        "d) Extinción de especies",
      ],
      answer: "b) Disminución de la capa de ozono",
    },
    {
      question: "¿Qué acción individual puede reducir tu huella de carbono?",
      options: [
        "a) Usar bombillas incandescentes",
        "b) Reducir el consumo de carne",
        "c) Dejar el aire acondicionado encendido al salir de casa",
        "d) Comprar ropa nueva cada temporada",
      ],
      answer: "b) Reducir el consumo de carne",
    },
    {
      question:
        "¿Qué sector produce la mayor cantidad de emisiones de gases de efecto invernadero?",
      options: [
        "a) Transporte",
        "b) Agricultura",
        "c) Industria",
        "d) Residencial",
      ],
      answer: "c) Industria",
    },
    {
      question:
        "¿Qué acuerdo internacional busca combatir el cambio climático?",
      options: [
        "a) Acuerdo de París",
        "b) Protocolo de Montreal",
        "c) Convención de Kyoto",
        "d) Tratado de Libre Comercio de América del Norte",
      ],
      answer: "a) Acuerdo de París",
    },
  ];
  const handleAnswer = (selectedAnswer: string) => {
    if (selectedAnswer === questions[questionIndex].answer) {
      setScore(score + 1);
    }
    if (questionIndex === questions.length - 1) {
      navigation.navigate("Celebration", {
        name: "",
        exp: score * 14,
        hits: score,
      });
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  };
  const restartQuiz = () => {
    setScore(0);
    setQuestionIndex(0);
    setShowResult(false);
  };
  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.headerContainer}>
        <Header />
      </View>

      <View
        style={[
          HomeStyles.content,
          {
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <Text
          style={[
            InitialSurveyStyles.title,
            {
              textAlign: "center",
              justifyContent: "center",
              marginBottom: "20%",
            },
          ]}
        >
          {questions[questionIndex].question}
        </Text>
        {questions[questionIndex].options.map((option, index) => (
          <Boton
            disabled={false}
            style={LoginStyles.googleButton}
            key={index}
            tipoTexto="subtitulo1"
            textStyles={{
              textAlign: "center",
            }}
            onPress={() => handleAnswer(option)}
            textValue={option}
          />
        ))}
      </View>
    </View>
  );
};

export default Lessons;
