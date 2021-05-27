import React, { useState, useEffect } from "react";
import { getRecyclingInfo } from "../../api";
import SRPresenter from "./SRPresenter";

export default ({
  route: {
    params: { barcode },
  },
}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ name: "", detail: "" });
  const [notFound, setNotFound] = useState(false);

  const sendBarcode = async () => {
    try {
      const res = await getRecyclingInfo(barcode);
      console.log(barcode, res[0]);
      if (res[0] === undefined) setNotFound(true);
      else setData(res[0]);
      setLoading(false);
    } catch (error) {
      console.log("get recycling info error", error);
    }
  };

  useEffect(() => {
    sendBarcode();
  }, []);

  return <SRPresenter loading={loading} data={data} notFound={notFound} />;
};
