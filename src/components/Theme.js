import { createText, createBox } from "@shopify/restyle";

const theme = {
  colors: {
    primary: "#FD8700",
    secondary: "#0C0D34",
    danger: "#FF0058",
    text: "rgba(12, 13, 52, 0.7)",
    white: "#FFF",
    black: "#2B2A2A",
    grey: "#D4D4D4",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: "Poppins-Bold",
      color: "white",
      textAlign: "center",
    },
    title: {
      fontSize: 20,
      fontFamily: "Poppins-Bold",
      color: "black",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "Poppins-Semibold",
      color: "secondary",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "Poppins-Regular",
      color: "text",
    },
    button: {
      fontSize: 15,
      fontFamily: "Poppins-Light",
      color: "black",
    },
  },
  breakpoints: {},
};

export const Box = createBox();
export const Text = createText();
export default theme;
