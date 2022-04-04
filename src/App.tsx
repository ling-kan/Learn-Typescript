import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import InputTask from './component/InputTask';
import ToDoList from './component/ToDoList';
import { ToDo } from "./model";

const App: React.FC = () => {
  const [todo, setToDo] = useState<string>("");
  const [todos, setToDos] = useState<ToDo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setToDos([...todos, { id: Date.now(), todo, isDone: false }]);
      setToDo("");
    }
  };

  return (
    <Container >
      <Typography variant="h1" textAlign="center" gutterBottom> Task List </Typography>
      <InputTask todo={todo} setToDo={setToDo} handleAdd={handleAdd} />
      <ToDoList todos={todos} setToDos={setToDos}/>
    </Container>
  );
}

export default App;
