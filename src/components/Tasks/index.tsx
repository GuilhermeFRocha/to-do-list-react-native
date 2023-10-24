import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { CheckTask, ContainerTask, TextTask } from "./styles";
import trash from "../../../assets/trash.png";

interface TasksProps {
  name: string;
  onRemove: () => void;
  setTasksCheck: (tasks: string[]) => void;
  tasksCheck: string[];
}

export const Tasks = ({
  name,
  onRemove,
  setTasksCheck,
  tasksCheck,
}: TasksProps) => {
  const [success, setSuccess] = useState<boolean>(false);

  function handleTaskConcluided() {
    if (tasksCheck.includes(name)) {
      setTasksCheck(tasksCheck.filter((taskName: string) => taskName !== name));
      setSuccess(false);
    } else {
      setTasksCheck([...tasksCheck, name]);
      setSuccess(true);
    }
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
      <TextTask
        style={{
          color: success ? "#808080" : "#fff",
          textDecorationLine: success ? "line-through" : "none",
        }}
      >
        {name.length > 20 ? name.slice(0, 20) + "..." : name}
      </TextTask>
      <TouchableOpacity
        onPress={() => {
          onRemove();
          setTasksCheck(
            tasksCheck.filter((taskName: string) => taskName !== name)
          );
        }}
      >
        <Image source={trash} />
      </TouchableOpacity>
    </ContainerTask>
  );
};
