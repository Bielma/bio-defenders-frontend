import React, { useEffect } from "react";
import { Image, Text, TouchableHighlight, View } from "react-native";
import StyleText from "../../components/StyleText";
import { ButtonStyles } from "../../components/StyleButton";
import { CelebrationStyles } from "./constants";
import theme from "../../theme";
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

interface ICelebrationProps {
  name: string;
  exp: number;
  hits: number;
}

const Celebration = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [exp, setExp] = React.useState(0);
  const [hits, setHits] = React.useState(0);
  const route = useRoute();
  useEffect(() => {
    const { name, exp, hits } = route.params;
    setExp(exp);
    setHits(hits);
  }, []);
  return (
    <View style={CelebrationStyles.container}>
      <View style={CelebrationStyles.imageContainer}>
        <Image
          style={CelebrationStyles.fireworksImage}
          source={require("../../../assets/fuegos_artificiales.png")}
        />
        <Image
          style={CelebrationStyles.birdsImage}
          source={require("../../../assets/birds.png")}
        />
      </View>

      <Image source={require("../../../assets/icon_mundo.png")} />
      <StyleText tipo="titulo3" style={CelebrationStyles.title}>
        Lección Completada!
      </StyleText>

      <View
        style={{
          flexDirection: "row",
          flex: 0.3,
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <View
          style={[
            CelebrationStyles.CardContainer,
            { backgroundColor: theme.colors.naranjaDos, marginLeft: "3%" },
          ]}
        >
          <StyleText
            tipo={"textSecondary"}
            style={{ textAlign: "center", color: "white" }}
          >
            TOTAL XP
          </StyleText>
          <View style={CelebrationStyles.CardBody}>
            <StyleText tipo={"titulo3"} style={{}}>
              {exp}
            </StyleText>
          </View>
        </View>
        <View
          style={[
            CelebrationStyles.CardContainer,
            { backgroundColor: theme.colors.colorLogo, marginRight: "3%" },
          ]}
        >
          <StyleText
            tipo={"textSecondary"}
            style={{ textAlign: "center", color: "white" }}
          >
            INCREIBLE
          </StyleText>
          <View style={CelebrationStyles.CardBody}>
            <StyleText tipo={"titulo3"} style={{}}>
              {hits}
            </StyleText>
          </View>
        </View>
      </View>
      <TouchableHighlight
        style={[ButtonStyles.primaryButton, CelebrationStyles.continueButton]}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate("Home")}
      >
        <StyleText
          tipo={"textoBoton"}
          style={{ color: "#FFFFFF", textAlign: "center" }}
        >
          CONTINUAR
        </StyleText>
      </TouchableHighlight>
    </View>
  );
};
Celebration.defaultProps = { name: "", exp: 0, hits: 0 };

export default Celebration;
