import React from "react";
import { SafeAreaView, Image, Dimensions } from "react-native";
import styled from "styled-components/native";
import GlobalStyles from "../../components/GlobalStyles";
import Background from "../../assets/background.jpg";
import Barcode from "../../assets/barcode.png";
import Carousel from "../../components/Carousel";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

const Container = styled.View`
  align-items: center;
`;

const Wrapper = styled.View`
  position: absolute;
  top: 25%;
  z-index: 1;
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

export default ({ goToWhere }) => {
  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <Container>
        <Image
          source={Background}
          style={{
            width: deviceWidth,
            height: deviceHeight * 0.85,
            opacity: 0.7,
          }}
        />
        <Wrapper>
          <Image
            source={Barcode}
            style={{
              width: 200,
              height: 200,
            }}
          />
          <Button onPress={() => goToWhere("Scan")} color={"#1e90ff"}>
            <BtnText fontsize={20}>바코드 스캔</BtnText>
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
