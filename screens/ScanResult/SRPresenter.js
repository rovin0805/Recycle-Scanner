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
  border: 1.5px solid #27cd78;
  border-radius: 40px;
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

const BtnWrapper = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  background-color: #27cd78;
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
`;

const BtnText = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: bold;
`;

const GrayText = styled.Text`
  color: #696969;
  font-size: 15px;
  margin-top: 10px;
`;

export default ({ loading, data, notFound, kindArr, goToWhere }) => {
  const { name, detail, kind } = data;
  const kinds =
    "종이류, 종이팩, 금속캔, 고철, 유리, 병류, 플라스틱 용기류, 합성수지류, 음식물, 마스크, 기타";

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
              <Description>
                {detail.replace(/\./g, ". ").replace(/다\./g, "다.\n")}
              </Description>
            </Block>
            <Block>
              <Title>재활용 품목</Title>
              <Description>{kind.replace(/,/g, ", ")}</Description>
              {kindArr?.length > 0 && (
                <>
                  <GrayText>
                    * 해당 품목에 대한 재활용 정보 더 보러 가기
                  </GrayText>
                  <BtnWrapper>
                    {kindArr.map((kind, index) => {
                      if (kinds.includes(kind)) {
                        return (
                          <Button
                            key={index}
                            onPress={() =>
                              goToWhere("Section", { title: kind })
                            }
                          >
                            <BtnText>{kind}</BtnText>
                          </Button>
                        );
                      }
                    })}
                  </BtnWrapper>
                </>
              )}
            </Block>
          </>
        )}
      </TextWrapper>
    </Container>
  );
};
