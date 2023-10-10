import { Image, Text, TextInput, View } from "react-native";
import { InputText, StyledText, StyledView, ViewInput } from "./styles";
import icon from "../../../assets/favicon.png";
import Icon from "react-native-vector-icons/EvilIcons";

export const Home = () => {
  return (
    <>
      <StyledView>
        <Image source={icon} />
        <StyledText>
          to
          <Text style={{ color: "#5E60CE" }}>do</Text>
        </StyledText>
      </StyledView>

      <ViewInput>
        <InputText
          placeholder="Adicionar uma nova tarefa"
          placeholderTextColor="#808080"
        />
        <Icon name="plus" size={30} color="white" />
      </ViewInput>
    </>
  );
};
