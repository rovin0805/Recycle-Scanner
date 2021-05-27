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
import GlassLogo from "../../assets/glassLogo.jpeg";
import GlassWarning from "../../assets/glassWarning.jpg";
import GlassType from "../../assets/glassType.jpg";
import GlassReuse from "../../assets/glassReuse.jpg";

export default () => (
  <Container>
    <Block mg={10}>
      <RowWrapper>
        <Image
          source={GlassLogo}
          style={{
            width: 50,
            height: 50,
            marginRight: 10,
          }}
        />
        <Title>유리병</Title>
      </RowWrapper>
      <Line />
      <Block mg={10}>
        <Kind>음료수병, 기타병류</Kind>
        <Block mg={5}>
          <DesTitle>▪ 배출 방법</DesTitle>
          <Description>
            - 내용물을 비우고 물로 헹구는 등 이물질을 제거하여 배출
          </Description>
          <Description>- 담배꽁초 등 이물질을 넣지 않고 배출</Description>
          <Description>- 유리병이 깨지지 않도록 주의하여 배출</Description>
          <Description>
            - 소주, 맥주 등 빈용기보증금 대상 유리병은 소매점 등으로 반납하여
            보증금 환급
          </Description>
        </Block>
        <Block mg={5}>
          <DesTitle>▪ 해당품목</DesTitle>
          <Description>음료수병, 와인병, 양주병, 드링크병 등</Description>
        </Block>
        <Block mg={5}>
          <DesTitle>▪ 비해당품목</DesTitle>
          <Description>
            - 깨진 유리제품은 신문지 등에 싸서 종량제 봉투 배출
          </Description>
          <Description>
            - 코팅 및 다양한 색상이 들어간 유리제품, 내열 유리제품, 크리스탈
            유리제품, 판유리, 조명기구용 유리류, 사기· 도자기류 등
          </Description>
          <Description>
            * 특수규격마대 또는 대형폐기물 처리 등 지자체 조례에 따라 배출
          </Description>
        </Block>
      </Block>
      <Block mg={10}>
        <Kind red={true}>유리병류가 아닙니다!</Kind>
        <Image
          source={GlassWarning}
          style={{
            width: width * 0.9,
            height: 110,
            resizeMode: "contain",
          }}
        />
      </Block>
      <Block mg={10}>
        <Kind>빈용기보증금 제도로 환급 받는 법</Kind>
        <Block mg={5}>
          <DesTitle>▪ 빈용기 보증금 제도란?</DesTitle>
          <Description>
            - 사용된 빈 병을 회수하고 재사용을 촉진하기 위해 제품의 가격에
            '빈용기보증금'을 포함시켜 판매한다.
          </Description>
          <Description>
            - 소비자는 유리용기의 제품을 구입한 후, 빈용기보증금 제품을 취급하고
            있는 슈퍼, 대형마트 등의 소매점에 반환하면 '빈용기보증금'을 다시
            돌려받을 수 있다.
          </Description>
          <Description>※ 빈용기보증금 상담센터 : 1522-0082</Description>
        </Block>
        <Block mg={5}>
          <DesTitle>▪ 환불가능한 빈 병의 유형</DesTitle>
          <Image
            source={GlassType}
            style={{
              width: width * 0.9,
              height: 110,
              resizeMode: "contain",
            }}
          />
        </Block>
        <Block mg={5}>
          <DesTitle>▪ 얼마를 돌려받을 수 있나요?</DesTitle>
          <Description>
            - 100원 = 190mℓ이상 ~ 400mℓ미만 소주, 맥주(소형), 콜라, 사이다 등
          </Description>
          <Description>
            - 130원 = 400mℓ이상 ~ 1,000mℓ미만 맥주(중·대형) 등
          </Description>
          <Description>
            ※ 법적근거 :‘자원의 절약과 재활용촉진에 관한 법률’법제15조의2,
            시행규칙 제 12조의2(별표4)
          </Description>
          <Image
            source={GlassReuse}
            style={{
              width: width * 0.9,
              height: 110,
              resizeMode: "contain",
            }}
          />
        </Block>
      </Block>
      <Block mg={10}>
        <Kind>FAQ</Kind>
        <Block mg={5}>
          <DesTitle>Q. 깨진 유리는 어떻게 배출하나요?</DesTitle>
          <Description>
            깨진 유리는 신문지에 싸서 종량제 봉투로 배출합니다.
          </Description>
          <Description>
            단, 깨진 유리의 양이 많을 경우 특수규격마대(불연물질)를 구매하여
            배출합니다.
          </Description>
          <Description>
            * 특수규격마대 구입처 : 구 지정 판매처(동주민센터, 편의점 등)
          </Description>
        </Block>
        <Block mg={5}>
          <DesTitle>
            Q. 일반 유리제품(유리잔 또는 맥주컵 등)은 어떻게 배출하나요?
          </DesTitle>
          <Description>
            일반 유리잔이나 맥주컵은 유리병류로 배출합니다.
          </Description>
          <Description>
            단, 내열유리는 일반유리와 혼합되면 재활용 처리 시 불량을 유발하므로
            특수마대(불연물질)를 구매하여 배출합니다.
          </Description>
          <Description>
            * 내열유리의 종류 : 전자레인지 또는 가스레인지용 유리 용기
          </Description>
        </Block>
        <Block mg={5}>
          <DesTitle>
            Q. 유리병이 색상별로 구분되어 있는데 어떻게 배출하나요?
          </DesTitle>
          <Description>색상에 구분 없이 유리병에 배출합니다.</Description>
          <Description>
            Best) 3색(흰색, 녹색, 갈색)병을 따로 모아 배출합니다.
          </Description>
          <Description>
            Good) 3색(흰색, 녹색, 갈색)병을 함께 배출 가능합니다.
          </Description>
        </Block>
        <Block mg={5}>
          <DesTitle>
            Q. 소주병, 맥주병, 청량음료 병은 어떻게 배출하나요?
          </DesTitle>
          <Description>
            빈용기보증금 대상 유리병은 소매점(마트, 슈퍼 등)에 반납하거나
            무인회수기를 이용하여 보증금을 환불 받으시면 됩니다.
          </Description>
          <Description>
            * 무인회수기 설치 마트는 한국순환자원유통지원센터에 문의(콜센터,
            1522-0082
          </Description>
        </Block>
        <Block mg={5}>
          <DesTitle>
            Q. 유리병에 담배꽁초, 이물질이 묻어 있는 경우 어떻게 배출하나요?
          </DesTitle>
          <Description>
            가급적 깨끗이 세척 후 유리병으로 배출합니다.
          </Description>
        </Block>
        <Block mg={5}>
          <DesTitle>Q. 유리병의 병뚜껑은 어떻게 배출해야 하나요?</DesTitle>
          <Description>
            유리병의 뚜껑은 유리병과 함께 배출하도록 합니다
          </Description>
          <Description>
            * 유리병의 뚜껑은 철과 알루미늄 재질로써, 재활용 가능
          </Description>
        </Block>
      </Block>
    </Block>
  </Container>
);
