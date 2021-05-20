import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Warning from "../../components/Warning";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export default ({ hasPermission, scanned, handleBarCodeScanned }) => {
  return (
    <Container>
      {hasPermission ? (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      ) : (
        <Warning target={"바코드 스캔"} permission={"카메라 접근"} />
      )}
    </Container>
  );
};
