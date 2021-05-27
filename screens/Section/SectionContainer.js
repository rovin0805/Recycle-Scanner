import React, { useEffect } from "react";
import SectionPresenter from "./SectionPresenter";

export default ({
  route: {
    params: { title },
  },
  navigation,
}) => {
  useEffect(() => {
    navigation.setOptions({
      title,
    });
  }, [navigation]);

  return <SectionPresenter title={title} />;
};
