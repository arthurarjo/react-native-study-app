import React, { useRef, useState, useEffect } from "react";

import { Dimensions, Text } from "react-native";
import Animated, { divide } from "react-native-reanimated";

import { Box, Dot, Button, Slide } from "~/components";
import { useScrollHandler } from "react-native-redash";

const { width } = Dimensions.get("window");

const slides = [
  {
    title: "Browse & Order All Products at Any Time",
    picture: {
      src: require("assets/images/walktrough-illustration-1.png"),
      width: 375,
      height: 343,
    },
  },
  {
    title: "You Package in Our Safe Hands",
    picture: {
      src: require("assets/images/walktrough-illustration-2.png"),
      width: 375,
      height: 379,
    },
  },
  {
    title: "Committed Delivery on Time",
    picture: {
      src: require("assets/images/walktrough-illustration-3.png"),
      width: 375,
      height: 396,
    },
  },
  {
    title: "7/24 Fastest & Safest Delivery",
    picture: {
      src: require("assets/images/walktrough-illustration-4.png"),
      width: 375,
      height: 385,
    },
  },
];

const Onboarding = ({ navigation }) => {
  const scroll = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollHandler, x } = useScrollHandler();

  const nextSlide = () => {
    if (currentIndex === slides.length - 1) return navigation.navigate("Login");
    setCurrentIndex(currentIndex + 1);
    scroll.current
      ?.getNode()
      .scrollTo({ x: width * (currentIndex + 1), animated: true });
  };

  const goToLastSlide = () => {
    setCurrentIndex(slides.length - 1);
    scroll.current
      ?.getNode()
      .scrollTo({ x: width * (slides.length - 1), animated: true });
  };

  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="white">
      <Box flex={1}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onMomentumScrollEnd={(e) => {
            setCurrentIndex(e.nativeEvent.contentOffset.x / width);
          }}
          {...scrollHandler}>
          {slides.map(({ title, picture }, index) => (
            <Slide key={index} {...{ title, picture }} />
          ))}
        </Animated.ScrollView>
      </Box>

      <Box flexDirection="row" alignSelf="flex-start" paddingHorizontal="m">
        {slides.map((_, index) => (
          <Dot key={index} animatedIndex={divide(x, width)} {...{ index }} />
        ))}
      </Box>
      <Box marginVertical="s" flexDirection="row" justifyContent="space-around">
        <Button
          label={"Skip"}
          variant={"transparent"}
          onPress={goToLastSlide}
        />
        <Button
          label={currentIndex === slides.length - 1 ? "Get started" : "Next"}
          variant={"primary"}
          onPress={nextSlide}
        />
      </Box>
    </Box>
  );
};

export default Onboarding;
