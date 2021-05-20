import React, { useState, useEffect } from "react";
import MapPresenter from "./MapPresenter";
import * as Location from "expo-location";

export default ({}) => {
  const [location, setLocation] = useState({
    latitude: 37.56653,
    longitude: 126.977985,
  });
  const [hasPermission, setHasPermission] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setHasPermission(false);
        setLoading(false);
      } else {
        getCurrentCoords();
      }
    })();
  }, []);

  const getCurrentCoords = async () => {
    let {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({});
    setHasPermission(true);
    setLocation({ latitude, longitude });
    setLoading(false);
  };

  const getAdress = async (latitude, longitude) => {
    const res = await Location.reverseGeocodeAsync({ latitude, longitude });
    console.log("address", res[0]);
  };

  return (
    <MapPresenter
      location={location}
      loading={loading}
      hasPermission={hasPermission}
    />
  );
};
