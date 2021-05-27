import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import {
  width,
  Container,
  Block,
  Title,
  Line,
  Kind,
  Description,
  DesTitle,
} from "../SectionStyle";
import NoFoodTrash1 from "../../assets/noFoodTrash1.jpg";
import NoFoodTrash2 from "../../assets/noFoodTrash2.jpg";
import NoFoodTrash3 from "../../assets/noFoodTrash3.jpg";

const Order = styled.Text`
  font-size: 16px;
  margin: 5px 0;
`;

const Point = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #1e90ff;
`;

export default () => (
  <Container>
    <Block mg={10}>
      <Title>음식물류폐기물</Title>
      <Line />
      <Block mg={10}>
        <Kind>음식물류폐기물 배출요령</Kind>
        <Order>1. 물기를 꽉 짜서 최대한 수분을 제거한 후 배출한다</Order>
        <Order>
          2. 일회용 비닐봉지, 나무젓가락, 이쑤시개 등 음식물쓰레기 외의 이물질은
          제거한다.
        </Order>
        <Order>
          3. 길이가 긴 채소류와 덩어리가 큰 수박 등은 잘게 썰어 부피를 줄여서
          배출한다.
        </Order>
        <Order>
          4. 배출요일(예시 : 월~토요일) 및 배출시간(예시 : 일몰 후 문전배출)을
          지킨다.
        </Order>
      </Block>
      <Block mg={10}>
        <Kind>음식물류폐기물로 넣어서는 안 되는 물질</Kind>
        <Block mg={5}>
          <DesTitle>▪ 채소류</DesTitle>
          <Description>- 쪽파·대파, 미나리 등의 뿌리</Description>
          <Description>- 고추씨, 고추대</Description>
          <Description>- 양파·마늘·생강·옥수수 껍질, 옥수수대</Description>
        </Block>
        <Block mg={5}>
          <DesTitle>▪ 과일류</DesTitle>
          <Description>
            - 호두·밤·땅콩·도토리·코코넛·파인애플 등의 딱딱한 껍데기
          </Description>
          <Description>- 복숭아·살구·감 등 핵과류의 씨</Description>
        </Block>
        <Block mg={5}>
          <DesTitle>▪ 곡 류</DesTitle>
          <Description>- 왕겨</Description>
        </Block>
        <Block mg={5}>
          <DesTitle>▪ 육 류</DesTitle>
          <Description>- 소·돼지·닭 등의 털 및 뼈다귀</Description>
        </Block>
        <Block mg={5}>
          <DesTitle>▪ 어패류</DesTitle>
          <Description>
            - 조개·소라·전복·꼬막·멍게·굴 등 패류 껍데기
          </Description>
          <Description>- 게·가재 등 갑각류의 껍데기</Description>
          <Description>- 생선뼈</Description>
          <Description>- 복어내장</Description>
        </Block>
        <Block mg={5}>
          <DesTitle>▪ 알껍질</DesTitle>
          <Description>- 달걀·오리알·메추리알·타조알 등 껍데기</Description>
        </Block>
        <Block mg={5}>
          <DesTitle>▪ 찌꺼기</DesTitle>
          <Description>- 각종 차류(녹차 등) 찌꺼기, 한약재 찌꺼기</Description>
        </Block>
        <Block mg={5}>
          <DesTitle>▪ 기 타</DesTitle>
          <Description>
            - 비닐(봉지 등), 병뚜껑, 나무이쑤시개, 종이, 호일, 빨대, 일회용스푼,
            플라스틱, 고무장갑, 쇠붙이, 숟가락, 젓가락, 유리조각, 금속류 등
          </Description>
        </Block>
      </Block>
      <Block mg={10}>
        <Kind red={true}>음식물류폐기물이 아닙니다!</Kind>
        <Block mg={5}>
          <Description>* 지자체별 실정에 따라 종류별 결정</Description>
          <Description>
            * 음식물류폐기물은 사료화 및 퇴비화 공정 등을 통해 재활용되며,
            바이오가스화를 통해 자동차 연료 등의 에너지로도 재활용됩니다.
          </Description>
        </Block>
        <DesTitle>성상기준</DesTitle>
        <Block mg={5}>
          <Description>▪ 파쇄성</Description>
          <Image
            source={NoFoodTrash1}
            style={{
              width: width * 0.9,
              height: 100,
              resizeMode: "contain",
            }}
          />
        </Block>
        <Block mg={5}>
          <Description>▪ 복합성</Description>
          <Image
            source={NoFoodTrash2}
            style={{
              width: width * 0.9,
              height: 100,
              resizeMode: "contain",
            }}
          />
        </Block>
        <Block mg={5}>
          <Description>▪ 유해성</Description>
          <Image
            source={NoFoodTrash3}
            style={{
              width: width * 0.9,
              height: 100,
              resizeMode: "contain",
            }}
          />
        </Block>
        <Description>* 수분이 적고 딱딱해서 재활용하기 어려운 것들</Description>
        <Point>➡ 쓰레기종량제 봉투로 배출합니다!</Point>
      </Block>
    </Block>
  </Container>
);
