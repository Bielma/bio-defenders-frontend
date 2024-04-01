import React from "react";
import { Image, Text, TouchableHighlight, View } from "react-native";
import StyleText from "../../components/StyleText";
import { ButtonStyles } from "../../components/StyleButton";
import { CelebrationStyles } from "./constants";
import theme from "../../theme";

interface ICelebrationProps {
  name: string;
  exp: number;
  hits: number;
}

const Celebration = ({ name, exp, hits }: ICelebrationProps) => {
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
        onPress={() => alert("Continuar!")}
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
