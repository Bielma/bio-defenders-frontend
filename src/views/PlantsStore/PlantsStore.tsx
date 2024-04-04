import { View, Text } from "react-native";
import React from "react";
import { PlantsStoreStyles } from "./constants";
import PlantCard from "../../components/PlantCard";
import BottomMenu from "../../components/BottomMenu";

const PlantsStore = () => {
  return (
    <View style={PlantsStoreStyles.container}>
      <View>
        <View style={PlantsStoreStyles.row}>
          <PlantCard
            name="Antonio"
            price={10}
            avaible="No adquirido"
            image={require("@biodefenders/../assets/frames/framePlanta_01.jpg")}
          />
          <PlantCard
            name="Plant Name"
            price={10}
            avaible="Adquirido"
            image={require("@biodefenders/../assets/frames/framePlanta_01.jpg")}
          />
        </View>
        <View style={PlantsStoreStyles.row}>
          <PlantCard
            name="Plant Name"
            price={10}
            avaible="Adquirido"
            image={require("@biodefenders/../assets/frames/framePlanta_01.jpg")}
          />
          <PlantCard
            name="Plant Name"
            price={10}
            avaible="Adquirido"
            image={require("@biodefenders/../assets/frames/framePlanta_01.jpg")}
          />
        </View>
      </View>
      <View style={{ height: "11%" }}>
        <BottomMenu screenName="PlantsStore" />
      </View>
    </View>
  );
};

export default PlantsStore;
