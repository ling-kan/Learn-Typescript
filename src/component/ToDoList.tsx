import React from "react";
import { ToDo } from "../model";
import { Card, CardContent } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import ToDoItem from "./ToDoItem";
interface Props {
    todos: ToDo[];
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}
const ToDoList: React.FC<Props> = ({ todos, setToDos }: Props) => {
    return <Masonry columns={3} spacing={2}>
        {todos.map((todo) => (
            <Card sx={{ m: 2 }}>
                <CardContent>
                 <ToDoItem todo={todo} key={todo.id} todos={todos} setToDos={setToDos}/>
                </CardContent>
            </Card>
        ))}
    </Masonry>
};
export default ToDoList;
