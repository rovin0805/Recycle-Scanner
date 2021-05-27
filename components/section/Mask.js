import React from "react";
import { Image } from "react-native";
import { width, height, Container, Block, Title, Line } from "../SectionStyle";
import MaskPage from "../../assets/maskPage.jpg";
import MaskWarning from "../../assets/maskWarn.png";

export default () => (
  <Container>
    <Block mg={10}>
      <Title>마스크</Title>
      <Line />
      <Image
        source={MaskWarning}
        style={{
          width: width * 0.9,
          height: 400,
          resizeMode: "contain",
        }}
      />
      <Image
        source={MaskPage}
        style={{
          width: width * 0.9,
          height: height / 1.5,
          resizeMode: "contain",
        }}
      />
    </Block>
  </Container>
);
