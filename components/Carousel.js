import React from "react";
import { ScrollView, Image } from "react-native";
import styled from "styled-components/native";
import Icon0 from "../assets/paper.png";
import Icon1 from "../assets/can.png";
import Icon2 from "../assets/bottle.png";
import Icon3 from "../assets/plastic.png";
import Icon4 from "../assets/bag.png";
import Icon5 from "../assets/fishbone.png";
import Icon6 from "../assets/mask.png";
import Icon7 from "../assets/etc.jpg";

const Container = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  margin: 15px 10px;
`;

const ImageWrapper = styled.View`
  border: 1.5px solid lightgray;
  width: 100%;
  background-color: #fff;
  border-radius: 40px;
  padding: 13px;
  margin-bottom: 8px;
`;

const Title = styled.Text`
  color: #282828;
  font-size: 13px;
`;

export default ({ goToWhere }) => {
  const sections = [
    "종이류, 종이팩",
    "금속캔, 고철",
    "유리, 병류",
    "플라스틱 용기류",
    "합성수지류",
    "음식물",
    "마스크",
    "기타",
  ];

  const importName = [Icon0, Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={10}
      style={{ backgroundColor: "white" }}
    >
      {sections.map((section, index) => (
        <Container
          key={index}
          onPress={() => goToWhere("Section", { title: section })}
        >
          <ImageWrapper>
            <Image
              source={importName[index]}
              style={{
                width: 75,
                height: 75,
              }}
            />
          </ImageWrapper>
          <Title>{section}</Title>
        </Container>
      ))}
    </ScrollView>
  );
};
