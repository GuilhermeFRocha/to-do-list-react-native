import styled from "styled-components/native";
import { colors } from "../../styles/colors";

export const ContainerTask = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.gray_500};
  padding: 12px;
  border: 1px;
  border-color: ${colors.gray_400};
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const CheckTask = styled.View`
  width: 24px;
  height: 24px;
  border-width: 1px;
  border-radius: 20px;
  border-color: ${colors.blue_100};
`;

export const TextTask = styled.Text`
  text-decoration-color: ${colors.gray_300};
  font-size: 14px;
`;
