import React, { useState, useEffect } from "react";
import { getRecyclingInfo } from "../../api";
import SRPresenter from "./SRPresenter";

export default ({
  route: {
    params: { barcode },
  },
}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  const sendBarcode = async () => {
    try {
      console.log(barcode);
      const res = await getRecyclingInfo(barcode);
      console.log("res", res);
      setLoading(false);
    } catch (error) {
      console.log("get recycling info error", error);
    }
  };

  useEffect(() => {
    sendBarcode();
  }, []);

  return <SRPresenter loading={loading} />;
};
