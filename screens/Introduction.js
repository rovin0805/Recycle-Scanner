import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import Logo from "../assets/cloud.png";

const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  padding: 0 30px;
`;

const ImageWrapper = styled.View`
  margin: 0 auto;
`;

const Block = styled.View`
  margin-bottom: 20px;
`;

const Title = styled.Text`
  color: #1e90ff;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Description = styled.Text`
  font-size: 17px;
  color: #282828;
`;

export default () => (
  <Container>
    <ImageWrapper>
      <Image
        source={Logo}
        style={{
          width: 150,
          height: 150,
        }}
      />
    </ImageWrapper>
    <Block>
      <Title>출품작 명</Title>
      <Description>리사이클 스캐너</Description>
    </Block>
    <Block>
      <Title>팀 명</Title>
      <Description>블루스카이</Description>
    </Block>
    <Block>
      <Title>팀원</Title>
      <Description>김가은, 최은정</Description>
    </Block>
    <Block>
      <Title>해결하는 문제</Title>
      <Description>
        제품마다 다른 분리배출 방법에 대해 알기 힘든 불편함 해소를 통한
        실재활용률 증가
      </Description>
    </Block>
    <Block>
      <Title>활용된 공공데이터</Title>
      <Description>서울특별시 성동구_가로휴지통현황</Description>
    </Block>
  </Container>
);
