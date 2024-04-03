import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { BookTouchableStyles } from "./constants";
import { Icon } from "@rneui/base";
import theme from "../../theme";

const BookTouchable = () => {
  return (
    <TouchableOpacity style={BookTouchableStyles.container}>
      <Icon
        name="book-open-variant"
        type="material-community"
        color={theme.colors.white}
      />
    </TouchableOpacity>
  );
};

export default BookTouchable;
