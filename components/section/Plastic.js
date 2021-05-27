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
import PlasticLogo from "../../assets/plasticLogo.jpg";
import PBottleLogo from "../../assets/pBottleLogo.jpg";
import PlasticWarning from "../../assets/plasticWarn.jpg";
import RemoveLabel from "../../assets/removeLabel.jpg";
import PBowlWarning from "../../assets/pBowlWarn.jpg";

export default () => (
  <Container>
    <Block mg={10}>
      <RowWrapper>
        <Image
          source={PBottleLogo}
          style={{
            width: 50,
            height: 50,
            marginRight: 10,
          }}
        />
        <Title>페트병</Title>
      </RowWrapper>
      <Line />
      <Block mg={10}>
        <Kind>페트</Kind>
        <Block mg={5}>
          <DesTitle>▪ 배출 방법</DesTitle>
          <Description>
            - 내용물을 비우고 물로 헹구는 등 이물질을 제거하여 배출한다.
          </Description>
          <Description>
            - 부착상표, 부속품 등 본체와 다른 재질은 제거한 후 배출한다.
          </Description>
          <Image
            source={RemoveLabel}
            style={{
              width: width * 0.9,
              height: 120,
              resizeMode: "contain",
            }}
          />
        </Block>
      </Block>
      <Block mg={10}>
        <Kind>FAQ</Kind>
        <Block mg={5}>
          <DesTitle>
            Q. 페트병이 색상별로 구분되어 있는데 어떻게 배출하나요?
          </DesTitle>
          <Description>색상에 구분 없이 페트병에 배출합니다.</Description>
        </Block>
        <Block mg={5}>
          <DesTitle>
            Q. 페트병 수거함이 없을 경우에는 어떻게 배출하나요?
          </DesTitle>
          <Description>플라스틱류 수거함에 배출합니다.</Description>
          <Description>
            * 단독주택의 경우, 가급적 페트병을 별도로 배출합니다.
          </Description>
        </Block>
      </Block>
    </Block>
    <Block mg={10}>
      <RowWrapper>
        <Image
          source={PlasticLogo}
          style={{
            width: 50,
            height: 50,
            marginRight: 10,
          }}
        />
        <Title>플라스틱 용기류</Title>
      </RowWrapper>
      <Line />
      <Image
        source={PlasticWarning}
        style={{
          width: width * 0.9,
          height: 250,
          resizeMode: "contain",
        }}
      />
      <Block mg={10}>
        <Kind>PET, PVC, PE, PP, PS, PSP 재질 등의 용기·트레이류</Kind>
        <Block mg={5}>
          <DesTitle>▪ 배출 방법</DesTitle>
          <Description>
            - 내용물을 비우고 물로 헹구는 등 이물질을 제거하여 배출
          </Description>
          <Description>
            * 물로 헹굴 수 없는 구조의 용기류(치약용기 등)는 내용물을 비운 후
            배출
          </Description>
          <Description>
            - 부착상표, 부속품 등 본체와 다른 재질은 제거한 후 배출
          </Description>
        </Block>
        <Block mg={5}>
          <DesTitle>▪ 해당품목</DesTitle>
          <Description>음료용기, 세정용기 등</Description>
        </Block>
        <Block mg={5}>
          <DesTitle>▪ 비해당품목</DesTitle>
          <Description>
            플라스틱 이외의 재질이 부착된 완구·문구류, 옷걸이, 칫솔, 파일철,
            전화기, 낚싯대, 유모차·보행기, CD·DVD 등
          </Description>
          <Description>
            * 종량제봉투, 특수규격마대 또는 대형폐기물 처리 등 지자체 조례에
            따라 배출
          </Description>
        </Block>
      </Block>
      <Block mg={5}>
        <Kind red={true}>재활용 용기류 버릴 때 이것을 주의!</Kind>
        <Image
          source={PBowlWarning}
          style={{
            width: width * 0.9,
            height: 400,
            resizeMode: "contain",
          }}
        />
      </Block>
      <Block mg={10}>
        <Kind>FAQ</Kind>
        <Block mg={5}>
          <DesTitle>
            Q. 샴푸, 세제, 막걸리 등 내용물이 남은 경우 배출이 가능한가요?
          </DesTitle>
          <Description>
            가급적 내용물을 깨끗이 씻어서 플라스틱류에 배출합니다.
          </Description>
        </Block>
        <Block mg={5}>
          <DesTitle>Q. 향수, 샴푸 등 펌핑식 용기는 어떻게 배출하나요?</DesTitle>
          <Description>
            펌핑식 용기의 부속품(노즐, 스프링 등)은 별도 배출 후 본체만 깨끗이
            씻어서 플라스틱류에 배출합니다
          </Description>
        </Block>
        <Block mg={5}>
          <DesTitle>Q. 고무대야는 재활용이 가능한가요?</DesTitle>
          <Description>
            재활용이 가능하나 여러 종류의 합성수지가 포함되어 재활용 가치가
            낮으므로 종량제 봉투에 배출하거나 대형폐기물 신고 후 배출수수료를
            납부하고 배출합니다.
          </Description>
          <Description>* 규격에 따른 수수료는 해당 구청문의</Description>
        </Block>
        <Block mg={5}>
          <DesTitle>Q. 완구류 등은 어떻게 배출하나요?</DesTitle>
          <Description>재질별로 분리 후 플라스틱류로 배출합니다.</Description>
          <Description>
            단, 재질별로 분리가 어려운 대형 완구류(유모차, 유아용 그네, 유아용
            자동차, 목마 등)는 대형폐기물로 신고 후 배출수수료를 납부하고
            배출합니다.
          </Description>
        </Block>
        <Block mg={5}>
          <DesTitle>Q. 알약 포장재는 재활용이 가능한가요?</DesTitle>
          <Description>
            알약 포장재는 복합재질(플라스틱(윗면) + 알루미늄(아랫면))로서 각각
            재활용은 가능하지만, 두 재질을 분리하기가 어려우므로 종량제 봉투로
            배출합니다.
          </Description>
        </Block>
      </Block>
    </Block>
  </Container>
);
