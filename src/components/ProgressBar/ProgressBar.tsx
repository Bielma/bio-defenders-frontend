import { useEffect, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

import { Dimensions } from "react-native";

interface ProgressBarProps {
  progress: number; // Progress value between 0 and 0.8
}
const windowDimensions = Dimensions.get("window");
const windowWidth = windowDimensions.width;

const ProgressBar = ({ progress }: ProgressBarProps) => {
  const [widtProgressBar, setWidthProgressBar] = useState<number>(0);

  useEffect(() => {
    Animated.timing(new Animated.Value(75), {
      toValue: 75,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bar, { width: progress * windowWidth }]} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 20,
    backgroundColor: "#ccc",
    borderRadius: 10,
    margin: 10,
    width: "80%",
  },
  bar: {
    height: 20,
    backgroundColor: "#89E219",
    borderRadius: 10,
    width: "80%",
  },
});
ProgressBar.defaultProps = {
  progress: new Animated.Value(0),
};
export default ProgressBar;
