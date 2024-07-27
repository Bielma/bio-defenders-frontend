import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { PlantCardStyles } from "./constants";
import { Icon } from "@rneui/base";
import theme from "../../theme";

interface IPlantCardProps {
  maceta: any;
  plantImage: any;
  name: string;
  price: number;
  avaible: string;
}
const PlantCard = ({
  maceta,
  name,
  price,
  avaible,
  plantImage,
}: IPlantCardProps) => {
  const colorAvaible =
    avaible === "Adquirido"
      ? theme.colors.primaryOne
      : theme.colors.rgbBackground;
  return (
    <TouchableOpacity style={PlantCardStyles.container}>
      <Image source={plantImage} style={{ width: 30, height: 40 }} />
      <Image source={maceta} style={{ width: 100, height: 100 }} />
      <Text style={{ marginTop: "10%" }}>{name}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon
            name="circle-multiple"
            type="material-community"
            size={20}
            color={theme.colors.secondaryThree}
          />
          <Text>{price}</Text>
        </View>
      </View>
      <Text style={{ color: colorAvaible }}>{avaible}</Text>
    </TouchableOpacity>
  );
};

PlantCard.defaultProps = {
  name: "Plant Name",
  price: 0,
  avaible: "Adquirido",
  plantImage: require("@biodefenders/../assets/frames/version_gratuita/plantas/version_01/frame01_v1.png"),
  image: require("@biodefenders/../assets/frames/version_gratuita/plantas/version_01/frame01_v1.png"),
};

export default PlantCard;
