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
    <Warning>π« Warning π«</Warning>
    <Warning>
      <Color color={"#1e90ff"}>{target}</Color> κΈ°λ₯μ μ¬μ©νκΈ° μν΄μλ
    </Warning>
    <Warning>
      <Color color={"crimson"}>{permission} νμ©</Color>μ΄ νμν©λλ€
    </Warning>
  </>
);
