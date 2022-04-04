import React from "react";
import { ToDo } from "../model";
import { Card, CardContent, Typography } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
interface Props {
    todos: ToDo[];
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}
const ToDoList: React.FC<Props> = ({ todos, setToDos }: Props) => {
    return <Masonry columns={3} spacing={2}>
        {todos.map((item) => (
            <Card sx={{ m: 2 }}>
                <CardContent>
                    <Typography>{item.todo}</Typography>
                </CardContent>
            </Card>
        ))}
    </Masonry>
};
export default ToDoList;
