import React from "react";

import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";

import { theme } from "~/components";

import { AuthenticationNavigator } from "~/pages/Authentication";

const App = () => {
  return (
    <ThemeProvider {...{ theme }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AuthenticationNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
