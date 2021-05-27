import React from "react";
import { Alert } from "react-native";
import MainPresenter from "./MainPresenter";

export default ({ navigation }) => {
  const goToWhere = (where, arg = {}) => navigation.navigate(where, arg);

  const PopUpAlert = () =>
    Alert.alert(
      "⚠ 어떻게 사용하나요?",
      "분리배출 정보를 알고 싶은 제품의 바코드를 스캔하면 해당 제품에 대한 올바른 분리배출 정보를 얻을 수 있습니다."
    );

  return <MainPresenter goToWhere={goToWhere} PopUpAlert={PopUpAlert} />;
};
