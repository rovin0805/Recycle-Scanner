import React from "react";
import { Dimensions } from "react-native";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import Warning from "../../components/Warning";
import Loader from "../../components/Loader";

const { width, height } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default ({ location, loading, hasPermission }) => {
  const { latitude, longitude } = location;

  return loading ? (
    <Loader />
  ) : (
    <Container>
      {hasPermission ? (
        <MapView
          style={{ width, height }}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <MapView.Marker
            title="현재 위치"
            coordinate={{ latitude, longitude }}
          />
        </MapView>
      ) : (
        <Warning target={"지도"} permission={"위치 접근"} />
      )}
    </Container>
  );
};
