import React, { useEffect, useState } from "react";
import { Animated, Text, TextInput, TextInputBase, View } from "react-native";
import { InitialSurveyStyles } from "./constants";
import ProgressBar from "../../components/ProgressBar";
import { Dimensions } from "react-native";
import Boton from "../../components/Boton";
import questionsJson from "../../constants/questions";
import StyleText from "../../components/StyleText";
import { LoginStyles } from "../../views/Login/constants";
import { sendRequest } from "../../utils/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationProp, useNavigation } from "@react-navigation/native";
interface Question {
  question: string;
  options: string[];
}
const InitialSurvey = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const [progress, setProgress] = useState<number>(0);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [questions, setQuestions] = useState<any>([
    {
      id: 1,
      question: "¿Cuanto es tu gasto mensual de luz?",
      options: [],
      answer: "",
      type: "home",
      placeholder: "Ej. $100",
    },
    {
      id: 2,
      question: "¿Usas cilindros de gas o gas estacionario?",
      options: ["Cilindro", "Estacionario"],
      answer: "",
      type: "home",
    },
    {
      id: 3,
      question: "¿Cuántos cilindros de gas gastas al mes?",
      answer: "",
      placeholder: "Ej. 2 cilindros",
      showIf: { id: 2, value: "Cilindro" },
      options: [],
    },

    {
      id: 4,
      question: "¿Aproximadamente cuánto gastas en gas estacionario al año?",
      answer: "",
      placeholder: "Ej. $1000",
      showIf: { id: 2, value: "Estacionario" },
      options: [],
    },

    {
      id: 5,
      question: "¿Cuentas con climatizadores en casa?",
      options: ["Si", "No"],
      answer: "",
      type: "home",
    },
    {
      id: 6,
      question: "¿Aire acondicionado o calentador?",
      options: ["Aire", "Calentador"],
      answer: "",
      showIf: { id: 5, value: "Si" },
    },

    {
      id: 7,
      question: "¿Qué tipo de calentador?",
      options: ["Gas", "Electrico", "Quemadores"],
      answer: "",
      showIf: { id: 6, value: "Calentador" },
    },

    {
      id: 8,
      question: "¿Por cuánto tiempo los utilizas?",
      answer: "",
      placeholder: "Ej. 6 hrs",
      showIf: { id: 5, value: "Si" },
      options: [],
    },

    {
      id: 9,
      question: "¿Aproximadamente cuánta carne roja consumes a la semana?",
      options: [],
      answer: "",
      type: "consumo",
      placeholder: "Ej. 1.200 kg",
    },
    {
      id: 10,
      question: "¿Qué tipo de transporte frecuentemente utilizas?",
      options: ["Automóvil", "Transporte público", "Bicicleta"],
      answer: "",
      type: "transporte",
    },
    {
      id: 11,
      question: "¿Cuánto gastas en gasolina a la semana?",
      answer: "",
      placeholder: "Ej. $1000",
      showIf: { id: 10, value: "Automóvil" },
      options: [],
    },

    {
      id: 12,
      question: "¿Con cuánta frecuencia usas transporte público?",
      answer: "",
      placeholder: "Ej. frecuentemente",
      showIf: { id: 10, value: "Transporte público" },
      options: [],
    },
  ]);
  const [questions2, setQuestions2] = useState<any>([
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
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async () => {
    setLoading(true);
    const questionsData = questions.filter((q) => q.answer !== "");
    console.log(questionsData);
    const response = await sendRequest("/initial-questions", {
      method: "POST",
      body: JSON.stringify(questionsData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.success) {
      //TODO: Redirect to main page
      console.log(response.message);
      //Save 'onbardingDone' on asyncStorage
      await AsyncStorage.setItem("onboardingDone", "true");
      await AsyncStorage.setItem(
        "huellaCarbono",
        JSON.stringify(response.huellaDeCarbono)
      );
      await AsyncStorage.setItem("recomendationsId", response.recomendationsId);
      await AsyncStorage.setItem(
        "recommendations",
        JSON.stringify(response.recomendaciones)
      );

      navigation.navigate("Home");
    } else {
      console.log(response);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (questions[questionIndex]?.showIf) {
      const { id, value } = questions[questionIndex].showIf;
      if (questions.find((q) => q.id === id)?.answer !== value) {
        setQuestionIndex((prevquestionIndex) => prevquestionIndex + 1);
      }
      if (isLastQuestion()) {
        handleSubmit();
        return;
      }
    }
    setProgress((prevProgress) => prevProgress + 0.8 / (questions.length - 1));
  }, [questionIndex]);
  const isLastQuestion = () => questionIndex >= questions.length - 1;
  const handlePress = () => {
    setQuestionIndex((prevquestionIndex) => prevquestionIndex + 1);
    if (isLastQuestion()) {
      handleSubmit();
      return;
    }
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
  return loading ? (
    <View
      style={[
        InitialSurveyStyles.container,
        { flex: 1, justifyContent: "center" },
      ]}
    >
      <Text>Cargando...</Text>
    </View>
  ) : (
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
        {questions[questionIndex]?.options?.length > 0 ? (
          questions[questionIndex]?.options?.map(
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
