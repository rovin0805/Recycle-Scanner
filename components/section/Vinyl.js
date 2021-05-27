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
import VinylLogo from "../../assets/vinylLogo.jpg";
import VinylLogos from "../../assets/vinylLogos.jpg";

export default () => (
  <Container>
    <Block mg={10}>
      <RowWrapper>
        <Image
          source={VinylLogo}
          style={{
            width: 50,
            height: 50,
            marginRight: 10,
          }}
        />
        <Title>비닐류(필름류)</Title>
      </RowWrapper>
      <Line />
      <Image
        source={VinylLogos}
        style={{
          width: width * 0.9,
          height: 100,
          resizeMode: "contain",
        }}
      />
      <Block mg={10}>
        <Kind>비닐포장재, 1회용비닐봉투</Kind>
        <Block mg={5}>
          <DesTitle>▪ 배출 방법</DesTitle>
          <Description>
            - 내용물을 비우고 물로 헹구는 등 이물질을 제거하여 배출
          </Description>
          <Description>- 흩날리지 않도록 봉투에 담아 배출</Description>
        </Block>
        <Block mg={5}>
          <DesTitle>▪ 해당품목</DesTitle>
          <Description>1회용 봉투 등 각종 비닐류</Description>
        </Block>
        <Block mg={5}>
          <DesTitle>▪ 비해당품목</DesTitle>
          <Description>
            - 깨끗하게 이물질 제거가 되지 않은 랩필름 등
          </Description>
          <Description>
            - 식탁보, 고무장갑, 장판, 돗자리, 섬유류 등(천막, 현수막, 의류,
            침구류 등)
          </Description>
          <Description>
            * 종량제봉투, 특수규격마대 또는 대형폐기물 처리 등 지자체 조례에
            따라 배출
          </Description>
        </Block>
      </Block>
      <Block mg={10}>
        <Kind>FAQ</Kind>
        <Block mg={5}>
          <DesTitle>
            Q. 이물질이 묻어 있는 과자, 빵, 라면 봉지 등은 재활용이 가능한가요?
          </DesTitle>
          <Description>
            이물질이 묻어 있는 경우, 깨끗이 씻어서 비닐류에 배출합니다.
          </Description>
          <Description>
            단, 이물질 제거가 어려운 경우에는 종량제 봉투로 배출합니다.
          </Description>
        </Block>
        <Block mg={5}>
          <DesTitle>
            Q. 재활용 표시가 없는 1회용 봉투도 재활용이 가능한가요?
          </DesTitle>
          <Description>
            과자, 라면 봉지 등과 함께 비닐류로 배출합니다.
          </Description>
        </Block>
        <Block mg={5}>
          <DesTitle>
            Q. 제품을 포장한 뽁뽁이(버블랩)는 어떻게 배출하나요?
          </DesTitle>
          <Description>뽁뽁이(버블랩)는 비닐류로 배출합니다.</Description>
        </Block>
        <Block mg={5}>
          <DesTitle>Q. 아이스팩은 어떻게 배출하나요?</DesTitle>
          <Description>
            냉동팩은 겉(비닐)과 안(합성수지물질)의 재질이 달라, 제품을 분리하여
            겉의 비닐을 깨끗하게 배출하면 재활용이 가능하며, 통째로 버릴 때에는
            종량제 봉투로 배출하면 됩니다
          </Description>
        </Block>
        <Block mg={5}>
          <DesTitle>
            Q. 비닐과 종이가 합쳐져 있는 포장재(쌀포장재 등)는 어떻게
            처리해야하나요?
          </DesTitle>
          <Description>
            단면이 비닐 코팅된 종이는 종이류로, 양면이 비닐 코팅된 종이는
            비닐류로 분리배출하면 됩니다. (복합재질포장재는 구성 부분의 표면적
            등을 고려하여 분리배출 표시를 하므로 해당 분리배출 표시를 확인하여
            분리배출 할 수 있습니다)
          </Description>
        </Block>
      </Block>
    </Block>
    <Block mg={10}>
      <Title>발포합성수지</Title>
      <Line />
      <Block mg={10}>
        <Kind>스티로폼 완충재</Kind>
        <Block mg={5}>
          <DesTitle>▪ 배출 방법</DesTitle>
          <Description>
            - 내용물을 비우고 물로 헹구는 등 이물질을 제거하여 배출
          </Description>
          <Description>
            - 부착상표 등 스티로폼과 다른 재질은 제거한 후 배출
          </Description>
          <Description>
            - TV 등 전자제품 구입 시 완충재로 사용되는 발포합성수지 포장재는
            가급적 구입처로 반납
          </Description>
        </Block>
        <Block mg={5}>
          <DesTitle>▪ 해당품목</DesTitle>
          <Description>
            농·수·축산물 포장용 발포스티렌상자, 전자제품 완충재로 사용되는
            발포합성수지포장재
          </Description>
        </Block>
        <Block mg={5}>
          <DesTitle>▪ 비해당품목</DesTitle>
          <Description>
            타 재질과 코팅 또는 접착된 발포스티렌, 건축용 내·외장재 스티로폼,
            이물질을 제거하기 어려운 경우 등
          </Description>
          <Description>
            종량제봉투, 특수규격마대 또는 대형폐기물 처리 등 지자체 조례에 따라
            배출
          </Description>
        </Block>
      </Block>
      <Block mg={10}>
        <Kind>FAQ</Kind>
        <Block mg={5}>
          <DesTitle>
            Q. 이물질이 묻어 있는 스티로폼은 재활용이 가능한가요?
          </DesTitle>
          <Description>
            내용물은 비우고 가급적 깨끗이 씻어서 배출하고 부착상표(테이프 등)는
            별도 제거하여 배출합니다.
          </Description>
        </Block>
      </Block>
    </Block>
  </Container>
);
