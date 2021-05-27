import React from "react";
import { Image } from "react-native";
import {
  Container,
  RowWrapper,
  Block,
  Title,
  Line,
  Kind,
  Description,
  DesTitle,
} from "../SectionStyle";
import CanLogo from "../../assets/canLogo.jpg";

export default () => (
  <Container>
    <Block mg={10}>
      <RowWrapper>
        <Image
          source={CanLogo}
          style={{
            width: 50,
            height: 50,
            marginRight: 10,
          }}
        />
        <Title>금속캔</Title>
      </RowWrapper>
      <Line />
      <Block mg={10}>
        <Kind>음료, 주류캔, 식료품캔</Kind>
        <Block mg={5}>
          <DesTitle>▪ 배출 방법</DesTitle>
          <Description>
            - 내용물을 비우고 물로 헹구는 등 이물질을 제거하여 배출
          </Description>
          <Description>- 담배꽁초 등 이물질을 넣지 않고 배출</Description>
          <Description>
            - 플라스틱 뚜껑 등 금속캔과 다른 재질은 제거한 후 배출
          </Description>
        </Block>
        <Block mg={5}>
          <DesTitle>▪ 해당품목</DesTitle>
          <Description>음료수캔, 맥주캔, 통조림캔 등</Description>
        </Block>
        <Block mg={5}>
          <DesTitle>▪ 비해당품목</DesTitle>
          <Description>알루미늄 호일 등</Description>
          <Description>*종량제봉투로 배출</Description>
        </Block>
      </Block>
      <Block mg={10}>
        <Kind>기타캔류 (부탄가스, 살충제용기 등)</Kind>
        <Block mg={5}>
          <DesTitle>▪ 배출 방법</DesTitle>
          <Description>내용물을 제거한 후 배출</Description>
          <Description>
            * 가스용기는 가급적 통풍이 잘되는 장소에서 노즐을 누르는 등 내용물을
            완전히 제거한 후 배출
          </Description>
        </Block>
        <Block mg={5}>
          <DesTitle>▪ 해당품목</DesTitle>
          <Description>
            부탄가스 용기, 살충제 용기, 스프레이 용기 등
          </Description>
        </Block>
        <Block mg={5}>
          <DesTitle>▪ 비해당품목</DesTitle>
          <Description>
            * 내용물이 남아있는 캔류(락카, 페인트통 등)는 특수규격마대 등 지자체
            조례에 따라 배출
          </Description>
        </Block>
      </Block>
      <Block mg={10}>
        <Kind>FAQ</Kind>
        <Block mg={5}>
          <DesTitle>
            Q. 캔에 담배꽁초, 이물질이 묻은 경우 어떻게 배출하나요?
          </DesTitle>
          <Description>
            가급적 내용물을 깨끗이 씻어서 캔류에 배출합니다.
          </Description>
        </Block>
        <Block mg={5}>
          <DesTitle>Q. 캔의 뚜껑은 어떻게 배출해야 하나요?</DesTitle>
          <Description>
            캔 뚜껑은 같은 재질이면 캔과 함께 배출합니다.
          </Description>
          <Description>
            단, 통조림통 등과 같이 재질이 다른 경우 별도 배출합니다.
          </Description>
        </Block>
        <Block mg={5}>
          <DesTitle>Q. 알루미늄 호일은 캔과 함께 배출 가능한가요?</DesTitle>
          <Description>
            호일은 알루미늄 캔과 재질이 같지만 포장재가 아닌 제품이므로 별도
            배출합니다.
          </Description>
        </Block>
        <Block mg={5}>
          <DesTitle>
            Q. 다 사용한 부탄가스통은 구멍을 뚫어서 배출해야 하나요?
          </DesTitle>
          <Description>
            안전사고의 위험으로 가급적 노즐을 누르거나 구멍을 뚫어 가스를 제거한
            후 캔류로 배출합니다.
          </Description>
          <Description>
            * 가급적 통풍이 원활한 장소에서 잔류 가스를 배출 하시면 됩니다.
          </Description>
        </Block>
        <Block mg={5}>
          <DesTitle>
            Q. 가정에서 사용한 페인트통은 어떻게 배출해야 하나요?
          </DesTitle>
          <Description>
            페인트통에 남은 내용물이 없는 경우 캔류 수거함으로 배출합니다.
          </Description>
          <Description>
            단, 내용물이 있는 경우 지자체와 협의하여 생활계유해폐기물로
            배출합니다.
          </Description>
        </Block>
      </Block>
    </Block>
    <Block mg={10}>
      <Title>고철류</Title>
      <Line />
      <Block mg={10}>
        <Kind>고철, 비철금속</Kind>
        <Block mg={5}>
          <DesTitle>▪ 배출 방법</DesTitle>
          <Description>이물질이 섞이지 않도록 한 후 배출</Description>
        </Block>
        <Block mg={5}>
          <DesTitle>▪ 해당품목</DesTitle>
          <Description>
            공기구, 철사, 못 등 고철류, 알루미늄, 스테인레스 제품 등 비철금속류
          </Description>
        </Block>
        <Block mg={5}>
          <DesTitle>▪ 비해당품목</DesTitle>
          <Description>
            금속 이외의 재질(천, 고무, 플라스틱 등)이 부착된 우산, 프라이팬,
            전기용품 등
          </Description>
          <Description>
            * 재질별로 분리가 곤란한 경우에는 종량제봉투, 특수규격마대 또는
            대형폐기물 처리 등 지자체 조례에 따라 배출
          </Description>
        </Block>
      </Block>
    </Block>
  </Container>
);
