import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import Animated from "react-native-reanimated";

import CircularSelection from "./CircularSelection";
import Thumbnails from "./Thumbnails";

const { Value } = Animated;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#1a1b1c"
  }
});

export default Channel = ({ channels }) => {
  const index = new Value(0);
  const isActive = new Value(0);
  return (
    <View style={styles.container}>
      <Thumbnails {...{ index, channels, isActive }} />
      <CircularSelection {...{ channels, index, isActive }} />
    </View>
  );
};
