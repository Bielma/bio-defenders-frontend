import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { PlantCardStyles } from "./constants";
import { Icon } from "@rneui/base";
import theme from "../../theme";

interface IPlantCardProps {
  image: any;
  name: string;
  price: number;
  avaible: string;
}
const PlantCard = ({ image, name, price, avaible }: IPlantCardProps) => {
  const colorAvaible =
    avaible === "Adquirido"
      ? theme.colors.primaryOne
      : theme.colors.rgbBackground;
  return (
    <TouchableOpacity style={PlantCardStyles.container}>
      <Image source={image} style={{ width: 100, height: 150 }} />
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
  image: require("../../../assets/frames/framePlanta_01.jpg"),
};

export default PlantCard;
