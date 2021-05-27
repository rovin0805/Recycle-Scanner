import React from "react";
import { Image } from "react-native";
import {
  width,
  Container,
  RowWrapper,
  Block,
  Title,
  Line,
  Kind,
  Description,
  DesTitle,
} from "../SectionStyle";
import Light from "../../assets/light.jpg";

export default () => (
  <Container>
    <Block mg={10}>
      <Kind>의류 및 원단류</Kind>
      <Block mg={5}>
        <Description>
          - 지자체 또는 민간 재활용사업자가 비치한 폐의류 전용수거함에 배출
        </Description>
        <Description>
          - 전용수거함이 없는 문전수거 지역 등에서는 물기에 젖지 않도록 마대
          등에 담거나 묶어서 배출
        </Description>
      </Block>
    </Block>
    <Block mg={10}>
      <Kind>폐식용유</Kind>
      <Block mg={5}>
        <Description>
          - 음식물 등 이물질이 섞이지 않게 모아 폐식용유 전용수거함에 배출한다.
        </Description>
      </Block>
    </Block>
    <Block mg={10}>
      <Kind>영농폐기물류</Kind>
      <Block mg={5}>
        <DesTitle>▪ 농약 용기</DesTitle>
        <Description>
          - 폐농약 플라스틱 용기, 폐농약 봉지류만 투명 그물망(배추망, 양파망)에
          모아서 배출(수거보상비 지급)
        </Description>
        <Description>
          ※ 폐농약 유사용기(영양제, 친환경유기농재)는 재활용품으로
          분리배출(수거보상비 미지급)
        </Description>
      </Block>
      <Block mg={5}>
        <DesTitle>▪ 농촌 폐비닐</DesTitle>
        <Description>
          하우스용 비닐과 멀칭용 비닐을 구분하여 흙과 자갈, 잡초를 털어낸 후
          운반이 쉽도록 묶어서 마을 공동집하장 또는 수거·운반차량 진입이 가능한
          일정 장소에 보관한다.
        </Description>
      </Block>
    </Block>
    <Block mg={10}>
      <Kind>폐형광등</Kind>
      <Description>
        - 폐형광등은 유해물질을 포함하고 있으므로 깨지지 않도록 주의하여
        폐형광등 전용수거함에 배출한다.
      </Description>
      <Description>
        - 깨진 폐형광등은 신문지 등으로 감싸 사람이 찔리거나 베이지 않도록 하여
        종량제 봉투에 담아 배출한다.
      </Description>
      <Image
        source={Light}
        style={{
          width: width * 0.9,
          height: 150,
          resizeMode: "contain",
        }}
      />
    </Block>
    <Block mg={10}>
      <Kind>폐건전지</Kind>
      <Description>- 전지를 제품에서 분리하여 배출한다.</Description>
      <Description>
        - 주요거점(동 주민센터·아파트의 폐형광등·폐건전지 일체함 또는 편의점,
        아파트 동별 우편함 등)의 전용수거함에 배출한다.
      </Description>
      <Block mg={5}>
        <DesTitle>휴대폰배터리는 어떻게 버릴까요?</DesTitle>
        <Description>- 휴대폰배터리는 휴대폰과 함께 배출합니다.</Description>
      </Block>
    </Block>
    <Block mg={10}>
      <Kind>폐의약품</Kind>
      <Description>
        - 폐의약품은 약국, 보건소 등으로 배출하면 되며, 수거된 폐의약품은
        소각처리 됩니다.
      </Description>
    </Block>
  </Container>
);
