import styled from "styled-components/native";
import { TextInput } from "react-native";

export const StyledView = styled.View`
  background-color: #000;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 70px 0;
`;

export const InputText = styled(TextInput)`
  background: #262626;
  padding: 16px;
  font-size: 16px;
  border-radius: 6px;
  border: 2px solid black;
  width: 224px;
  color: #808080;
`;

export const IconPlus = styled.View`
  background: #1e6f9f;
  padding: 14px;
  border-radius: 6px;
`;

export const StyledText = styled.Text`
  font-size: 30px;
  color: #4ea8de;
  font-weight: 800;
`;
export const ViewInput = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
  position: absolute;
  top: 146px;
  z-index: 5;
  left: -50%;
  right: -50%;
`;

export const ViewMain = styled.View`
  background-color: #191919;
  height: 100%;
`;

export const ViewList = styled.View`
  padding-top: 55px;
  width: 80%;
  margin: 0 auto;
`;

export const HeadTask = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CreatedTask = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const CompletedTask = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const NumberTask = styled.View`
  padding: 2px 8px;
  background-color: #333333;
  border-radius: 20px;
  border: none;
`;

export const MainTask = styled.View`
  margin-top: 20px;
  width: 100%;
  border-top-width: 2px;
  border-color: #2f2f2f;
  padding-top: 48px;
`;

export const WithoutTask = styled.View`
  display: flex;
  align-items: center;
`;
