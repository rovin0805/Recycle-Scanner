import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import Recycle from "../../assets/recycle2.png";
import Loader from "../../components/Loader";
import NotFound from "../../assets/error-404.png";

const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  padding: 0 30px;
`;

const ImageWrapper = styled.View`
  /* border: 1.5px solid lightgray; */
  border-radius: 50px;
  padding: 10px;
  margin: 0 auto;
`;

const TextWrapper = styled.View`
  margin: 20px 0;
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

const Warning = styled.Text`
  text-align: center;
  margin: 0 auto;
  font-size: 20px;
  font-weight: bold;
  color: crimson;
`;

export default ({ loading, data, notFound }) => {
  const { name, detail } = data;

  return loading ? (
    <Loader />
  ) : (
    <Container>
      <ImageWrapper>
        <Image
          source={notFound ? NotFound : Recycle}
          style={{
            width: 100,
            height: 100,
          }}
        />
      </ImageWrapper>
      <TextWrapper>
        {notFound ? (
          <Warning>해당 정보가 아직 준비되지 않았습니다!</Warning>
        ) : (
          <>
            <Block>
              <Title>제품명</Title>
              <Description>{name}</Description>
            </Block>
            <Block>
              <Title>분리배출 방법</Title>
              <Description>{detail}</Description>
            </Block>
          </>
        )}
      </TextWrapper>
    </Container>
  );
};
