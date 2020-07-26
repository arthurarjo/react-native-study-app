import React from "react";

import Animated, { interpolate, Extrapolate } from "react-native-reanimated";
import { interpolateColor } from "react-native-redash";
import { useTheme } from "@shopify/restyle";

const Dot = ({ animatedIndex, index }) => {
  const theme = useTheme();

  const width = interpolate(animatedIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [10, 25, 10],
    extrapolate: Extrapolate.CLAMP,
  });

  const backgroundColor = interpolateColor(animatedIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [theme.colors.grey, theme.colors.primary, theme.colors.grey],
  });

  return (
    <Animated.View
      style={{
        height: 10,
        borderRadius: 6,
        margin: 6,
        width,
        backgroundColor,
      }}
    />
  );
};

export default Dot;
