import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const { width, height } = Dimensions.get("window");

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  padding: 0 20px;
`;

export const RowWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Block = styled.View`
  margin: ${(props) => `${props.mg}px 0`};
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #27cd78;
`;

export const Line = styled.View`
  border: 1px solid #27cd78;
  width: 60%;
  margin-bottom: 10px;
`;

export const Kind = styled.Text`
  font-size: 19px;
  font-weight: bold;
  color: ${(props) => (props.red ? "crimson" : "rgb(24, 76, 95)")};
`;

export const Description = styled.Text`
  font-size: 15px;
  margin-bottom: 3px;
`;

export const DesTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
