import styled from "styled-components/native";

interface TextTaskProps {
  success: boolean;
}

export const ContainerTask = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #262626;
  padding: 12px;
  border: 1px;
  border-color: #333333;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const CheckTask = styled.View`
  width: 24px;
  height: 24px;
  border-width: 1px;
  border-radius: 20px;
  border-color: #4ea8de;
`;

export const TextTask = styled.Text<TextTaskProps>`
  text-decoration: ${(props) => (props.success ? "line-through" : "none")};
  color: ${(props) => (props.success ? "#808080" : "#fff")};
  text-decoration-color: #808080;
  font-size: 14px;
`;
