import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import InputTask from './component/InputTask';
import ToDoList from './component/ToDoList';
import { ToDo } from "./model";
import { DragDropContext, DropResult} from 'react-beautiful-dnd'
const App: React.FC = () => {
  const [todo, setToDo] = useState<string>("");
  const [todos, setToDos] = useState<ToDo[]>([]);
  const [completedToDos, setCompletedToDos] = useState<ToDo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setToDos([...todos, { id: Date.now(), todo, isDone: false }]);
      setToDo("");
    }
  };
  
  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    console.log(result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = todos;
    let complete = completedToDos;
    // Source Logic
    if (source.droppableId === "ToDosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "ToDosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedToDos(complete);
    setToDos(active);
  };

  return (
  <DragDropContext onDragEnd={onDragEnd}>
      <Container >
        <Typography variant="h1" textAlign="center" gutterBottom> Task List </Typography>
        <InputTask todo={todo} setToDo={setToDo} handleAdd={handleAdd} />
        <ToDoList todos={todos} setToDos={setToDos} completedToDos={completedToDos} setCompletedToDos={setCompletedToDos} />
      </Container>
    </DragDropContext>
  );
}

export default App;
