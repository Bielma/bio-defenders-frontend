import { View, Text } from "react-native";
import React from "react";
import { PlantsStoreStyles } from "./constants";
import PlantCard from "../../components/PlantCard";
import BottomMenu from "../../components/BottomMenu";
import { Icon } from "@rneui/base";
import theme from "../../theme";
const PlantsStore = () => {
  return (
    <View style={PlantsStoreStyles.container}>
      <View style={PlantsStoreStyles.coinsContainer}>
        <Text>Mis monedas </Text>
        <Icon
          name="circle-multiple"
          type="material-community"
          size={20}
          color={theme.colors.secondaryThree}
        />
        <Text> 34</Text>
      </View>
      <View style={PlantsStoreStyles.row}>
        <PlantCard
          name="Antonio"
          price={10}
          avaible="No adquirido"
          maceta={require("@biodefenders/../assets/frames/version_gratuita/macetas/maceta_01/frame01_macetita01.png")}
          plantImage={require("@biodefenders/../assets/frames/version_gratuita/plantas/version_01/frame01_v1.png")}
        />
        <PlantCard
          name="Plant Name"
          price={10}
          avaible="Adquirido"
          maceta={require("@biodefenders/../assets/frames/version_gratuita/macetas/maceta_01/frame01_macetita01.png")}
          plantImage={require("@biodefenders/../assets/frames/version_gratuita/plantas/version_01/frame01_v1.png")}
        />
      </View>
      <View style={PlantsStoreStyles.row}>
        <PlantCard
          name="Plant Name"
          price={10}
          avaible="Adquirido"
          maceta={require("@biodefenders/../assets/frames/version_gratuita/macetas/maceta_01/frame01_macetita01.png")}
          plantImage={require("@biodefenders/../assets/frames/version_gratuita/plantas/version_01/frame01_v1.png")}
        />
        <PlantCard
          name="Plant Name"
          price={10}
          avaible="Adquirido"
          maceta={require("@biodefenders/../assets/frames/version_gratuita/macetas/maceta_01/frame01_macetita01.png")}
          plantImage={require("@biodefenders/../assets/frames/version_gratuita/plantas/version_01/frame01_v1.png")}
        />
      </View>
      <View style={{ height: "11%" }}>
        <BottomMenu screenName="PlantsStore" />
      </View>
    </View>
  );
};

export default PlantsStore;
