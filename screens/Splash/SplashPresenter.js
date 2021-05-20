import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
// import Icon from "../../assets/white_cloud.png";
import Icon from "../../assets/cloud.png";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

const Title = styled.Text`
  /* color: white; */
  color: #6dd5fa;
  font-size: 27px;
  margin: 10px 0;
  font-weight: bold;
`;

const Wrapper = styled.View`
  position: absolute;
  bottom: 5%;
  align-items: center;
`;

const SmallTitle = styled.Text`
  color: rgb(112, 112, 112);
  /* color: white; */
  font-size: 15px;
`;

export default () => {
  return (
    // <LinearGradient
    //   colors={["#b6fbff", "#83a4d4"]}
    //   style={{
    //     flex: 1,
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    <Container>
      <Image
        source={Icon}
        style={{
          width: 160,
          height: 160,
        }}
      />
      <Title>Recycle Scanner</Title>
      <Wrapper>
        <SmallTitle>피어나다 메이크톤</SmallTitle>
        <SmallTitle>블루 스카이 팀</SmallTitle>
      </Wrapper>
    </Container>
    // </LinearGradient>
  );
};
