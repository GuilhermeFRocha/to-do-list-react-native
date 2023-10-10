import styled from "styled-components/native";
import { TextInput } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

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
  border-radius: 6px;
  border: 2px solid black;
`;

export const IconPlus = styled(Icon)`
  background: #1e6f9f;
  padding: 18px;
  border-radius: 20px;
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
  gap: 12px;
`;
