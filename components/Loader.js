import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: rgb(249, 243, 241);
`;

export default () => (
  <Container>
    <ActivityIndicator size="large" color="rgb(24, 76, 95)" />
  </Container>
);
