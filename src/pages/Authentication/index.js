import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Onboarding from "./Onboarding";
import Login from "./Login";

const AuthenticationStack = createStackNavigator();
export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Login" component={Login} />
    </AuthenticationStack.Navigator>
  );
};
