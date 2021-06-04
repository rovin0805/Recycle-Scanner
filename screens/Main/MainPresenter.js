import React from "react";
import { SafeAreaView, Image, Dimensions, View } from "react-native";
import styled from "styled-components/native";
import GlobalStyles from "../../components/GlobalStyles";
import Background from "../../assets/background.jpg";
import Barcode from "../../assets/barcode.png";
import Question from "../../assets/question.png";
import Bulb from "../../assets/bulbpng.png";
import Detail from "../../assets/detail.jpg";
import Carousel from "../../components/Carousel";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

const Container = styled.View`
  align-items: center;
`;

const Wrapper = styled.View`
  position: absolute;
  top: 25%;
  z-index: 1;
  align-items: center;
  justify-content: center;
`;

const Bubble = styled.View`
  padding: 10px;
  background-color: #fff;
  border-radius: 30px;
`;

const BubbleText = styled.Text`
  color: black;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-left: 5px;
`;

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.color};
  align-items: center;
  justify-content: center;
  width: ${deviceWidth / 2}px;
  height: ${deviceHeight / 12}px;
  border-radius: 40px;
  padding: 10px;
  margin-bottom: 30px;
`;

const BtnText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: ${(props) => props.fontsize}px;
`;

const BulbIcon = styled.TouchableOpacity`
  position: absolute;
  top: 6%;
  right: 3%;
  z-index: 1;
`;

const QIcon = styled.TouchableOpacity`
  position: absolute;
  top: 3%;
  right: 3%;
  z-index: 1;
`;

const styles = {
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 0,
    borderRightWidth: 15,
    borderBottomWidth: 30,
    borderLeftWidth: 15,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "white",
    borderLeftColor: "transparent",
    transform: [{ rotate: "180deg" }],
    marginBottom: 10,
  },
};

export default ({ goToWhere, PopUpAlert }) => {
  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <Container>
        <BulbIcon onPress={() => goToWhere("Intro")}>
          <Image
            source={Bulb}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </BulbIcon>
        <Image
          source={Background}
          style={{
            width: deviceWidth,
            height: deviceHeight * 0.85,
            opacity: 0.7,
          }}
        />
        <Wrapper>
          <Bubble>
            <QIcon onPress={PopUpAlert}>
              <Image
                source={Question}
                style={{
                  width: 27,
                  height: 27,
                }}
              />
            </QIcon>
            <BubbleText>
              제품의 바코드를 스캔하여 분리배출 정보를 얻을 수 있어요
            </BubbleText>
            <Image
              source={Detail}
              style={{
                width: deviceWidth * 0.8,
                height: 150,
                resizeMode: "contain",
              }}
            />
          </Bubble>
          <View style={styles.triangle} />
          <Button onPress={() => goToWhere("Scan")} color={"#1e90ff"}>
            <BtnText fontsize={20}>바코드 스캔하기</BtnText>
          </Button>
          <Button onPress={() => goToWhere("Map")} color={"#27CD78"}>
            <BtnText fontsize={17}>내 주변 쓰레기통 찾기</BtnText>
          </Button>
        </Wrapper>
      </Container>
      <Carousel goToWhere={goToWhere} />
    </SafeAreaView>
  );
};
