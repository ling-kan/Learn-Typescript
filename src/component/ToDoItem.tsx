import { Card, CardContent, Grid, Typography, TextField } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import { ToDo } from "../model";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import { Draggable } from "react-beautiful-dnd";

type Props = {
    index: number;
    todo: ToDo;
    todos: ToDo[];
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoItem = ({ index, todo, todos, setToDos }: Props) => {
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

    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {(provided, snapshot) => (
                <Card sx={{ m: 2 }}  {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <CardContent>
                        <form onSubmit={(e) => handleEdit(e, todo.id)}>
                            {edit ? (
                                <TextField fullWidth id="fullWidth" value={editToDo} onChange={(e) => setEditToDo(e.target.value)} />
                            ) : todo.isDone ? (
                                <Typography variant="body1" sx={{ textDecoration: "line-through" }}> {todo.todo}</Typography>
                            ) : (
                                <Typography variant="body1" > {todo.todo}</Typography>
                            )}

                            <Grid container spacing={2} mt={2} alignItems="center"
                                justifyContent="end">
                                <Grid item xs={1}>
                                    <EditIcon fontSize="medium" onClick={() => { !edit && !todo.isDone && setEdit(!edit) }} />
                                </Grid>
                                <Grid item xs={1}>
                                    <DeleteIcon fontSize="medium" onClick={() => handleDelete(todo.id)} />
                                </Grid>
                                <Grid item xs={1}>
                                    <DoneIcon fontSize="medium" onClick={() => handleDone(todo.id)} />
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>)}
        </Draggable>)
};
export default ToDoItem;