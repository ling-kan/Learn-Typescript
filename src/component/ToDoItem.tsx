import { Grid, Typography } from "@mui/material";
import React, { useRef, useState, useEffect} from "react";
import { ToDo } from "../model";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import ToDoList from "./ToDoList";

type Props = {
    todo: ToDo,
    todos: ToDo[]
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoItem = ({ todo, todos, setToDos }: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editToDo, setEditToDo] = useState<string>(todo.todo);
   
    const handleDone = (id: number) => {
        setToDos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    }

    const handleDelete = (id: number) => {
        setToDos(todos.filter((todo) => todo.id !== id));
    }
    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setToDos(
            todos.map((todo) => (todo.id === id ? { ...todo, todo: editToDo } : todo))
        );
        setEdit(false);
    }
    
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    return <form onSubmit={(e) => handleEdit(e, todo.id)}>
        {edit ? (
            <input value={editToDo} onChange={(e) => setEditToDo(e.target.value)} />
        ) : todo.isDone ? (
            <Typography component="body" sx={{ textDecoration: "line-through" }}> {todo.todo}</Typography>
        ) : (
            <Typography component="body" > {todo.todo}</Typography>
        )}


        <Grid container spacing={2} mt={2}>
            <Grid item xs={4}>
                <EditIcon fontSize="medium" onClick={() => { !edit && !todo.isDone && setEdit(!edit) }} />
            </Grid>
            <Grid item xs={4}>
                <DeleteIcon fontSize="medium" onClick={() => handleDelete(todo.id)} />
            </Grid>
            <Grid item xs={4}>
                <DoneIcon fontSize="medium" onClick={() => handleDone(todo.id)} />
            </Grid>
        </Grid>
    </form>
};
export default ToDoItem;