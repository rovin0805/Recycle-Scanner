import React, { useState, useEffect } from "react";
import { getRecyclingInfo } from "../../api";
import SRPresenter from "./SRPresenter";

export default ({
  route: {
    params: { barcode },
  },
  navigation,
}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ name: "", detail: "" });
  const [notFound, setNotFound] = useState(false);
  const [kindArr, setKindArr] = useState([]);

  const sendBarcode = async () => {
    try {
      const res = await getRecyclingInfo(barcode);
      if (res[0] === undefined) setNotFound(true);
      else setData(res[0]);
      setKindArr(res[0].kind.split(","));
      setLoading(false);
    } catch (error) {
      console.log("get recycling info error", error);
    }
  };

  const goToWhere = (where, arg = {}) => navigation.navigate(where, arg);

  useEffect(() => {
    sendBarcode();
  }, []);

  return (
    <SRPresenter
      loading={loading}
      data={data}
      notFound={notFound}
      goToWhere={goToWhere}
      kindArr={kindArr}
    />
  );
};
