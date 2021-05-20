import React, { useState, useEffect } from "react";
import ScanPresenter from "./ScanPresenter";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StackActions } from "@react-navigation/native";

export default ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    navigation.dispatch(
      StackActions.replace("ScanResult", {
        barcode: parseInt(data),
      })
    );
  };

  return (
    <ScanPresenter
      hasPermission={hasPermission}
      scanned={scanned}
      handleBarCodeScanned={handleBarCodeScanned}
    />
  );
};
