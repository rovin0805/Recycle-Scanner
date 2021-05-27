import React from "react";
import { Image } from "react-native";
import {
  width,
  height,
  Container,
  RowWrapper,
  Block,
  Title,
  Line,
  Kind,
  Description,
  DesTitle,
} from "../SectionStyle";
import PaperImg1 from "../../assets/paperimg1.png";
import PaperImg2 from "../../assets/paperimg2.png";
import PaperLogo from "../../assets/paperlogo.jpeg";
import PaperPackLogo from "../../assets/paperpacklogo.jpeg";

export default () => {
  return (
    <Container>
      <Block mg={10}>
        <RowWrapper>
          <Image
            source={PaperLogo}
            style={{
              width: 50,
              height: 50,
              marginRight: 10,
            }}
          />
          <Title>종이류</Title>
        </RowWrapper>
        <Line />
        <Image
          source={PaperImg2}
          style={{
            width: width * 0.9,
            height: height / 1.5,
            resizeMode: "contain",
          }}
        />
        <Block mg={10}>
          <Kind>신문</Kind>
          <Block mg={5}>
            <DesTitle>▪ 배출 방법</DesTitle>
            <Description>
              물기에 젖지 않도록 하고, 반듯하게 펴서 차곡차곡 쌓은 후 흩날리지
              않도록 끈 등으로 묶어서 배출한다.
            </Description>
          </Block>
          <Block mg={5}>
            <DesTitle>▪ 비해당품목</DesTitle>
            <Description>
              비닐 코팅 종이(광고지, 치킨 속포장재 등), 금박, 은박지, 벽지,
              자석전단지, 이물질을 제거하기 어려운 경우
            </Description>
            <Description>*종량제봉투로 배출</Description>
          </Block>
        </Block>
        <Block mg={10}>
          <Kind>책자, 노트</Kind>
          <Block mg={5}>
            <DesTitle>▪ 배출 방법</DesTitle>
            <Description>
              스프링 등 종이류와 다른 재질은 제거한 후 배출한다.
            </Description>
          </Block>
          <Block mg={5}>
            <DesTitle>▪ 해당품목</DesTitle>
            <Description>책, 잡지, 공책 노트 등</Description>
          </Block>
          <Block mg={5}>
            <DesTitle>▪ 비해당품목</DesTitle>
            <Description>비닐 코팅된 표지, 공책의 스프링 등</Description>
            <Description>
              *부속 재질에 따라 분리배출하거나 종량제봉투 등으로 배출
            </Description>
          </Block>
        </Block>
        <Block mg={10}>
          <Kind>종이컵</Kind>
          <Block mg={5}>
            <DesTitle>▪ 배출 방법</DesTitle>
            <Description>
              내용물을 비우고 물로 헹구는 등 이물질을 제거하여 배출한다.
            </Description>
          </Block>
        </Block>
        <Block mg={10}>
          <Kind>상자류</Kind>
          <Block mg={5}>
            <DesTitle>▪ 배출 방법</DesTitle>
            <Description>
              테이프 등 종이류와 다른 재질은 제거한 후 배출한다.
            </Description>
          </Block>
          <Block mg={5}>
            <DesTitle>▪ 해당품목</DesTitle>
            <Description>종이박스, 골판지 등</Description>
          </Block>
          <Block mg={5}>
            <DesTitle>▪ 비해당품목</DesTitle>
            <Description>
              비닐 코팅된 부분, 상자에 붙어있는 테이프, 철핀 등
            </Description>
            <Description>
              *부속 재질에 따라 분리배출하거나 종량제봉투 등으로 배출
            </Description>
          </Block>
        </Block>
        <Block mg={10}>
          <Kind red={true}>종이로 배출하면 안되는 품목</Kind>
          <Block mg={5}>
            <DesTitle>▪ 다른 재질과 혼합 구성된 종이</DesTitle>
            <Description>
              감열지(영수증), 금박지, 은박지, 다른 재질이 혼합된 벽지(천연재료
              벽지, PVC코팅 벽지 등)
            </Description>
          </Block>
          <Block mg={5}>
            <DesTitle>▪ 종이가 아닌 소재</DesTitle>
            <Description>부직포, 플라스틱합성지</Description>
          </Block>
        </Block>
        <Image
          source={PaperImg1}
          style={{
            width: width * 0.9,
            height: height / 1.5,
            resizeMode: "contain",
          }}
        />
        <Block mg={10}>
          <Kind>FAQ</Kind>
          <Block mg={5}>
            <DesTitle>Q. 종이조각, 고지서 영수증은 어떻게 배출하나요?</DesTitle>
            <Description>
              종이 조각 들도 모이면 재활용이 가능하므로 종이류로 배출합니다. 단,
              개인정보가 포함되어 있는 영수증과 고지서는 개인정보 식별이
              불가능하도록 유의해서 배출합니다.
            </Description>
            <Description>
              ※ 주의 : 마트 영수증(감열지) 등은 종량제 봉투로 배출합니다.
            </Description>
          </Block>
          <Block mg={5}>
            <DesTitle>Q. 종이재질인 핸드 타월은 어떻게 배출하나요?</DesTitle>
            <Description>
              물기만 닦은 핸드타월은 종이류로 배출합니다.
            </Description>
            <Description>
              단, 이물질이 묻어 있는 경우에는 종량제봉투로 배출합니다.
            </Description>
          </Block>
          <Block mg={5}>
            <DesTitle>Q. 휴지는 재활용이 가능한가요?</DesTitle>
            <Description>
              이물질이 묻은 휴지는 종량제봉투로 배출합니다.
            </Description>
          </Block>
          <Block mg={5}>
            <DesTitle>
              Q. 코팅된 종이(광고지, 전단지, 사진 등)는 어떻게 배출하나요?
            </DesTitle>
            <Description>
              코팅된 종이는 재활용불가이므로 종량제봉투로 배출합니다.
            </Description>
          </Block>
          <Block mg={5}>
            <DesTitle>
              Q. 스프링 등(철, 플라스틱)제본된 책자류는 어떻게 배출하나요?
            </DesTitle>
            <Description>
              스프링 및 비닐표지 등 부속품은 가급적 제거 후 종이류로 배출합니다.
            </Description>
          </Block>
          <Block mg={5}>
            <DesTitle>
              Q. 1회용 종이컵에 이물질(커피 등)이 약간 말라있을 경우에도
              재활용이 가능한가요?
            </DesTitle>
            <Description>깨끗한 종이컵은 종이류로 배출합니다.</Description>
            <Description>
              단, 다량의 이물질이 묻어 있는 경우에는 종량제봉투로 배출합니다.
            </Description>
          </Block>
          <Block mg={5}>
            <DesTitle>Q. 종이컵은 어떻게 배출하나요?</DesTitle>
            <Description>
              가급적 이물질(담배꽁초, 음식물)이 묻지 않은 상태에서 종이류로
              배출합니다.
            </Description>
            <Description>
              Best) 종이컵만 따로 모아 종이류에 배출하도록 합니다.
            </Description>
            <Description>
              Good) 종이류에 배출 불가 시 종이팩에 배출 가능 합니다.
            </Description>
            <Description>
              Bad) 종이류, 종이팩에 배출 불가 시 다른 재활용품(캔, 병류 등)과
              함께 배출 가능합니다.
            </Description>
          </Block>
        </Block>
      </Block>
      <Block mg={10}>
        <RowWrapper>
          <Image
            source={PaperPackLogo}
            style={{
              width: 50,
              height: 50,
              marginRight: 10,
            }}
          />
          <Title>종이팩, 종이컵</Title>
        </RowWrapper>
        <Line />
        <Block mg={10}>
          <Kind>살균팩, 멸균팩</Kind>
          <Block mg={5}>
            <DesTitle>▪ 배출 방법</DesTitle>
            <Description>
              - 물기에 젖지 않도록 하고, 반듯하게 펴서 차곡차곡 쌓은 후 흩날리지
              않도록 끈 등으로 묶어서 배출한다.
            </Description>
            <Description>
              - 빨대, 비닐 등 종이팩과 다른 재질은 제거한 후 배출한다.
            </Description>
            <Description>
              - 일반 종이류와 혼합되지 않게 종이팩 전용수거함에 배출한다.
            </Description>
            <Description>
              - 종이팩 전용수거함이 없는 경우에는 종이류와 구분할 수 있도록
              가급적 끈 등으로 묶어 종이류 수거함으로 배출한다.
            </Description>
          </Block>
          <Block mg={5}>
            <DesTitle>▪ 해당품목</DesTitle>
            <Description>우유팩, 두유팩, 소주팩, 쥬스팩 등</Description>
          </Block>
          <Block mg={5}>
            <DesTitle>▪ 비해당품목</DesTitle>
            <Description>종이, 신문지 등 종이류, 종이컵 등</Description>
            <Description>*종이류 수거함으로 배출</Description>
          </Block>
        </Block>
        <Block mg={10}>
          <Kind>종이컵</Kind>
          <Block mg={5}>
            <DesTitle>▪ 배출 방법</DesTitle>
            <Description>
              내용물을 비우고 물로 헹구는 등 이물질을 제거하여 배출한다.
            </Description>
          </Block>
        </Block>
        <Block mg={10}>
          <Kind red={true}>종이류와 종이팩을 구분하여 버려야 하는 이유</Kind>
          <Block mg={5}>
            <DesTitle>▪ 서로 다른 공정, 서로 다른 재활용 제품 생산</DesTitle>
            <Description>
              종이류와 종이팩은 재활용 공정의 차이로 인해서 종이류는 새 종이로,
              종이팩은 화장지, 미용 티슈와 같은 서로 다른 제품으로 재탄생합니다.
            </Description>
          </Block>
          <Block mg={5}>
            <DesTitle>▪ 종이팩 분리수거의 경제적 효과</DesTitle>
            <Description>
              우리나라에서 배출되는 연간 약 7만 톤의 종이팩 중 70%가 재활용되지
              못하고 있습니다. 이 종이팩만 재활용해도 연간 150억 원의 경제적
              비용을 회수할 수 있으며, 우리나라 인구의 1/3 이상(1,750만 명)이
              1년간 사용할 수 있는 50m 화장지 2억1천 롤을 생산할 수 있습니다.
            </Description>
          </Block>
        </Block>
        <Block mg={10}>
          <Kind>FAQ</Kind>
          <Block mg={5}>
            <DesTitle>
              Q. 종이팩 등을 버릴 시 꼭 물에 세척 후 배출해야 하나요?
            </DesTitle>
            <Description>
              종이팩은 가급적 내용물을 비우고, 물로 세척 후 압착해서 종이팩에
              배출합니다.
            </Description>
            <Description>
              * 물로 세척하는 이유는 내용물이 남아 있을 경우 세균 번식, 악취 등
              재활용 작업 시 지장을 주기 때문입니다.
            </Description>
          </Block>
          <Block mg={5}>
            <DesTitle>
              Q. 종이팩은 살균팩(우유팩), 멸균팩(두유, 주스팩 등)으로 구분하는데
              어떻게 배출해야 하나요?
            </DesTitle>
            <Description>
              살균팩, 멸균팩 구분 없이 종이팩에 배출합니다
            </Description>
            <Description>
              단, 살균팩, 멸균팩은 따로 모아 배출하는 것이 재활용에 도움이
              됩니다.
            </Description>
            <Description>
              Best) 살균팩(우유팩), 멸균팩(두유, 주스팩 등)을 따로 모아
              배출합니다.
            </Description>
            <Description>
              Good) 살균팩(우유팩), 멸균팩(두유, 쥬스팩 등)을 함께 배출
              가능합니다.
            </Description>
          </Block>
          <Block mg={5}>
            <DesTitle>
              Q. 종이팩에 이물질이 묻어 있는 경우 어떻게 배출해야 하나요?
            </DesTitle>
            <Description>
              가급적 깨끗이 세척 후 종이팩에 배출합니다.
            </Description>
            <Description>
              단, 다량의 이물질이 묻어 있을 경우 종량제 봉투로 배출합니다.
            </Description>
          </Block>
        </Block>
      </Block>
    </Container>
  );
};
