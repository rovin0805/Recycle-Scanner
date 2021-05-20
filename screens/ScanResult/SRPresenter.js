import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import Recycle from "../../assets/recycle2.png";

const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  padding: 0 30px;
`;

const ImageWrapper = styled.View`
  border: 1.5px solid lightgray;
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

export default ({ loading, data }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image
          source={Recycle}
          style={{
            width: 100,
            height: 100,
          }}
        />
      </ImageWrapper>
      <TextWrapper>
        <Block>
          <Title>제품명</Title>
          <Description>새콤달콤</Description>
        </Block>
        <Block>
          <Title>분리배출 방법</Title>
          <Description>
            safsadf asdfsadf sadfsafasfs asdfasf asdfsafsadfas safsadfsafsaf
            safsadfasdf asdfsadfsadfsaf sdfas asdfsadfsdfsdf sdfasds dfsfd
            dfsfdf dfsfdf fasdf asdfsadfsadfsaf sdfas asdfsadfsdfsdf sdfasds
            dfsfd dfsfdf dfsfdf fasdf asdfsadfsadfsaf sdfas asdfsadfsdfsdf
            sdfasds dfsfd dfsfdf dfsfdf fasdf asdfsadfsadfsaf sdfas
            asdfsadfsdfsdf sdfasds dfsfd dfsfdf dfsfdf fasdf asdfsadfsadfsaf
            sdfas asdfsadfsdfsdf sdfasds dfsfd dfsfdf dfsfdf fasdf
            asdfsadfsadfsaf sdfas asdfsadfsdfsdf sdfasds dfsfd dfsfdf dfsfdf
            fasdf asdfsadfsadfsaf sdfas asdfsadfsdfsdf sdfasds dfsfd dfsfdf
            dfsfdf fasdf asdfsadfsadfsaf sdfas asdfsadfsdfsdf sdfasds dfsfd
            dfsfdf dfsfdf fasdf asdfsadfsadfsaf sdfas asdfsadfsdfsdf sdfasds
            dfsfd dfsfdf dfsfdf fasdf asdfsadfsadfsaf sdfas asdfsadfsdfsdf
            sdfasds dfsfd dfsfdf dfsfdf sdfas asdfsadfsdfsdf sdfasds dfsfd
            dfsfdf dfsfdf fasdf asdfsadfsadfsaf sdfas asdfsadfsdfsdf sdfasds
            dfsfd dfsfdf dfsfdf fasdf asdfsadfsadfsaf sdfas asdfsadfsdfsdf
            sdfasds dfsfd dfsfdf dfsfdf fasdf asdfsadfsadfsaf sdfas
            asdfsadfsdfsdf sdfasds dfsfd dfsfdf dfsfdf fasdf asdfsadfsadfsaf
            sdfas asdfsadfsdfsdf sdfasds dfsfd dfsfdf dfsfdf fasdf
            asdfsadfsadfsaf sdfas asdfsadfsdfsdf sdfasds dfsfd dfsfdf dfsfdf
          </Description>
        </Block>
      </TextWrapper>
    </Container>
  );
};
