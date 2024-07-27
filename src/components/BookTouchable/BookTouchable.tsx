import { View, Text, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { BookTouchableStyles } from "./constants";
import { Icon } from "@rneui/base";
import theme from "../../theme";

interface IBookTouchableProps {
  top: number;
  left: number;
  onPress: () => void;
}

const BookTouchable = ({ top, left, onPress }: IBookTouchableProps) => {
  const [bottom, setBottom] = useState(10);
  const changeBottomState = () => {
    setBottom(0);
    setTimeout(() => {
      setBottom(10);
    }, 200);
  };
  return (
    <View style={[BookTouchableStyles.container, { top: top, left: left }]}>
      <View style={BookTouchableStyles.buttonContainer}>
        <TouchableHighlight
          style={[BookTouchableStyles.buttonStyles, { bottom: bottom }]}
          onPress={() => {
            onPress();
            changeBottomState();
          }}
          underlayColor={theme.colors.primaryThree}
        >
          <Icon
            name="book-open-variant"
            type="material-community"
            color={theme.colors.white}
          />
        </TouchableHighlight>
        <View style={[BookTouchableStyles.shadowButton, {}]}></View>
      </View>
    </View>
  );
};

export default BookTouchable;
