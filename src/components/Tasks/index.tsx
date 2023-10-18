import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { CheckTask, ContainerTask, TextTask } from "./styles";
import { Image } from "react-native";
import trash from "../../../assets/trash.png";
import check from "../../../assets/check.png";
import Icon from "react-native-vector-icons/AntDesign";

export const Tasks = ({ name, key, onRemove }: any) => {
  const [success, setSuccess] = useState<boolean>(false);

  function handleTaskConcluided() {
    setSuccess(!success);
  }
  return (
    <ContainerTask>
      <TouchableOpacity onPress={handleTaskConcluided}>
        {!success ? (
          <CheckTask />
        ) : (
          <Icon name="checkcircleo" size={24} color="#5E60CE" />
        )}
      </TouchableOpacity>
      <TextTask>{name}</TextTask>
      <TouchableOpacity onPress={onRemove}>
        <Image source={trash} />
      </TouchableOpacity>
    </ContainerTask>
  );
};
