import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Splash from "../screens/Splash";
import Main from "../screens/Main";
import Scan from "../screens/Scan";
import ScanResult from "../screens/ScanResult";
import Section from "../screens/Section";
import Map from "../screens/Map";
import Intro from "../screens/Introduction.js";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerTitleAlign: "center",
        headerStyle: {
          elevation: 0,
          borderBottomWidth: 0,
          shadowColor: "transparent",
          //   backgroundColor: "rgb(249, 243, 241)",
        },
        headerBackTitleVisible: false,
        headerTintColor: "black",
      }}
    >
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Scan"
        component={Scan}
        options={{ title: "바코드 스캔" }}
      />
      <Stack.Screen
        name="ScanResult"
        component={ScanResult}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="Section"
        component={Section}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="Map"
        component={Map}
        options={{ title: "내 주변 쓰레기통 위치" }}
      />
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{ title: "출품작 소개" }}
      />
    </Stack.Navigator>
  );
};
