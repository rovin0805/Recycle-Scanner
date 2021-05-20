import React from "react";
import MainPresenter from "./MainPresenter";

export default ({ navigation }) => {
  const goToWhere = (where, arg = {}) => navigation.navigate(where, arg);

  return <MainPresenter goToWhere={goToWhere} />;
};
