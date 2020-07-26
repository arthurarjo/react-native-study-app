import React from "react";
import { View, Image, Dimensions, StyleSheet } from "react-native";
import { Box, Text } from "~/components";

const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.7 * height;

const styles = StyleSheet.create({
  container: {
    width,
  },
});

const Slide = ({ title, picture }) => {
  return (
    <View style={styles.container}>
      <Box paddingHorizontal="m" marginTop="m">
        <Text variant="title" textAlign="center">
          {title}
        </Text>
      </Box>
      <Box marginVertical="m">
        <Image
          source={picture.src}
          style={{
            width,
            height: (width * picture.height) / picture.width,
          }}
        />
      </Box>
    </View>
  );
};

export default Slide;
