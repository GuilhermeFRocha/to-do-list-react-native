import { Image, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import {
  CompletedTask,
  CreatedTask,
  HeadTask,
  IconPlus,
  InputText,
  MainTask,
  NumberTask,
  StyledText,
  StyledView,
  ViewInput,
  ViewList,
  ViewMain,
  WithoutTask,
} from "./styles";
import icon from "../../../assets/favicon.png";
import ClipImg from "../../../assets/clipboard.png";
import Icon from "react-native-vector-icons/EvilIcons";
import { Tasks } from "../../components/Tasks";
import { useState } from "react";

export const Home = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskName, setTaskName] = useState("");

  function handleTaskAdd() {
    if (tasks.includes(taskName) || taskName === "") {
      return Alert.alert("Task já existe", `Preencha o campo`);
    }
    setTasks([...tasks, taskName]);
    setTaskName("");
  }

  function handleTaskRemove(item: any) {
    console.log("oi");
  }
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
          onChangeText={(e: any) => setTaskName(e)}
          value={taskName}
        />

        <IconPlus>
          <TouchableOpacity onPress={handleTaskAdd}>
            <Icon name="plus" size={30} color="white" />
          </TouchableOpacity>
        </IconPlus>
      </ViewInput>

      <ViewMain>
        <ViewList>
          <HeadTask>
            <CreatedTask>
              <Text style={{ color: "#4ea8de" }}>Criadas</Text>
              <NumberTask>
                <Text style={{ color: "#d9d9d9" }}>0</Text>
              </NumberTask>
            </CreatedTask>
            <CompletedTask>
              <Text style={{ color: "#8284FA" }}>Concluídas</Text>
              <NumberTask>
                <Text style={{ color: "#d9d9d9" }}>0</Text>
              </NumberTask>
            </CompletedTask>
          </HeadTask>
          <MainTask>
            <FlatList
              data={tasks}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <Tasks
                  key={item}
                  name={item}
                  onRemove={() => handleTaskRemove(item)}
                />
              )}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={() => (
                <WithoutTask>
                  <Image source={ClipImg} />

                  <Text style={{ textAlign: "center" }}>
                    Você ainda não tem tarefas cadastradas.
                  </Text>

                  <Text style={{ textAlign: "center" }}>
                    Crie tarefas e organize seus itens a fazers itens a fazer
                  </Text>
                </WithoutTask>
              )}
            />
          </MainTask>
        </ViewList>
      </ViewMain>
    </>
  );
};
