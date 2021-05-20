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

const Button = styled.TouchableOpacity`
  background-color: #1e90ff;
  align-items: center;
  justify-content: center;
  width: ${width / 2.5}px;
  height: ${height / 13}px;
  border-radius: 40px;
  padding: 10px;
  position: absolute;
  bottom: 10%;
`;

const BtnText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

export default ({ location, loading, hasPermission, setRefresh }) => {
  const { latitude, longitude } = location;

  return loading ? (
    <Loader />
  ) : (
    <Container>
      {hasPermission ? (
        <>
          <MapView
            style={{ width, height }}
            initialRegion={{
              latitude,
              longitude,
              latitudeDelta: 0.04,
              longitudeDelta: 0.04,
            }}
          >
            <MapView.Marker
              title="내 위치"
              coordinate={{ latitude, longitude }}
              //   pinColor={"#1e90ff"}
            />
          </MapView>
          <Button onPress={() => setRefresh(Date.now())}>
            <BtnText>내 위치 갱신</BtnText>
          </Button>
        </>
      ) : (
        <Warning target={"지도"} permission={"위치 접근"} />
      )}
    </Container>
  );
};
