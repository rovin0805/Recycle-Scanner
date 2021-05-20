import React, { useEffect } from "react";
import SplashPresenter from "./SplashPresenter";
import { CommonActions } from "@react-navigation/native";

export default ({ navigation }) => {
  const StackAction = () => {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{ name: "Main" }],
    });
    navigation.dispatch(resetAction);
  };

  const moveToNext = () => setTimeout(StackAction, 3000);

  useEffect(() => {
    moveToNext();
  }, []);

  return <SplashPresenter />;
};
