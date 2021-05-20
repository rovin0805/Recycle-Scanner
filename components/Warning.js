import React from "react";
import styled from "styled-components/native";

const Warning = styled.Text`
  text-align: center;
  margin: 0 auto;
  font-size: 20px;
  font-weight: bold;
  margin: 5px 0;
  color: black;
`;

const Color = styled.Text`
  color: ${(props) => props.color};
`;

export default ({ target, permission }) => (
  <>
    <Warning>🚫 Warning 🚫</Warning>
    <Warning>
      <Color color={"#1e90ff"}>{target}</Color> 기능을 사용하기 위해서는
    </Warning>
    <Warning>
      <Color color={"crimson"}>{permission} 허용</Color>이 필요합니다
    </Warning>
  </>
);
