import React from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "@shopify/restyle";

import { theme } from "./src/components";

const App = () => {
  return (
    <ThemeProvider {...{ theme }}>
      <SafeAreaProvider></SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
