import React, { useState, useEffect } from "react";
// import PromisePool from "@supercharge/promise-pool";
import PromisePool from "es6-promise-pool";
import MapPresenter from "./MapPresenter";
import * as Location from "expo-location";
import { getTrashBinInfo } from "../../api";

export default ({}) => {
  const [location, setLocation] = useState({
    latitude: 37.56653,
    longitude: 126.977985,
  }); // 서울
  const [hasPermission, setHasPermission] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);
  const [binInfo, setBinInfo] = useState([]);
  const [binCoords, setBinCoords] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setHasPermission(false);
        setLoading(false);
      } else {
        setHasPermission(true);
        sendAddressInfo("성동구");
      }
    })();
  }, [refresh]);

  const getCurrentCoords = async () => {
    try {
      let {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      setLocation({ latitude, longitude });
      getAdress(latitude, longitude);
    } catch (error) {
      console.log("get current location", error);
    }
  };

  const getAdress = async (latitude, longitude) => {
    try {
      const res = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      console.log("address", res[0]);
      sendAddressInfo(res[0].district);
    } catch (error) {
      console.log("geo to address error", error);
    }
  };

  const sendAddressInfo = async (address) => {
    try {
      const res = await getTrashBinInfo(address);
      if (res.length > 0) {
        setBinInfo(res);
        res.map((item) =>
          setBinCoords((prev) => [
            ...prev,
            {
              longitude: item.longitude,
              latitude: item.latitude,
            },
          ])
        );
      }
      setLoading(false);
      // let count = 0;
      // const producer = () => {
      //   if (count < res.length) {
      //     count++;
      //     return delayValue(count, 1000);
      //   } else {
      //     return null;
      //   }
      // };
      // const concurrency = 100;
      // const pool = new PromisePool(producer, concurrency);
      // setLoading(false);
      // const poolPromise = pool.start();
      // poolPromise
      //   .then(() => {
      //     console.log("then");
      //   })
      //   .catch((err) => console.error(err));

      // const { results, errors } = await PromisePool.for(res)
      //   .withConcurrency(1)
      //   .process(async (obj) => {
      //     return Location.geocodeAsync(obj.location)
      //       .then((res) => {
      //         return {
      //           longitude: res?.[0]?.longitude,
      //           latitude: res?.[0]?.latitude,
      //         };
      //       })
      //       .catch((err) => err);
      //   });
      // setBinCoords(results);
    } catch (error) {
      console.log("getTrashBinInfo api error", error);
    }
  };

  const getCoords = (obj, count) => {
    return new Promise((res, rej) => {
      Location.geocodeAsync(obj.location)
        .then((loc) => {
          setBinCoords((pre) => [
            ...pre,
            {
              latitude: loc[0].latitude,
              longitude: loc[0].longitude,
            },
          ]);
          res();
        })
        .catch((err) => rej(err));
    });
  };

  const delayValue = function (value, time) {
    return new Promise(function (resolve, reject) {
      // console.log("Resolving " + value + " in " + time + " ms");
      setTimeout(function () {
        resolve(value);
      }, time);
    });
  };

  return (
    <MapPresenter
      location={location}
      loading={loading}
      hasPermission={hasPermission}
      setRefresh={setRefresh}
      binCoords={binCoords}
      binInfo={binInfo}
    />
  );
};
