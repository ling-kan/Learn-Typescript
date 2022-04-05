import React from "react";
import { ToDo } from "../model";
import { Grid, Box, Typography } from '@mui/material';
import ToDoItem from "./ToDoItem";
import { Droppable } from 'react-beautiful-dnd';

interface Props {

    todos: Array<ToDo>;
    setToDos: React.Dispatch<React.SetStateAction<Array<ToDo>>>;

    completedToDos: Array<ToDo>;
    setCompletedToDos: React.Dispatch<React.SetStateAction<Array<ToDo>>>;
}

const ToDoList: React.FC<Props> = ({ todos, setToDos, completedToDos, setCompletedToDos }: Props) => {
    return (
        <Grid container mt={1} spacing={2}>
            <Grid item xs={6} >
                <Box
                    sx={{ minHeight: "70vh", bgcolor: "primary.light", borderRadius: 3 }}
                >
                    <Droppable droppableId="ToDosList">
                        {(provided, snapshot) => (
                            <div ref={provided.innerRef} {...provided.droppableProps} >
                                <Typography variant='h2' textAlign="center" py={2}>Active Tasks
                                </Typography>
                                {todos?.map((todo, index) => (
                                    <ToDoItem
                                        index={index}
                                        todo={todo}
                                        key={todo.id}
                                        todos={todos}
                                        setToDos={setToDos} />
                                ))
                                }
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </Box>
            </Grid>

            <Grid item xs={6}>
                <Box
                    sx={{ minHeight: "70vh", bgcolor: "secondary.light", borderRadius: 3 }}
                >
                    <Droppable droppableId="ToDosRemove">
                        {(provided, snapshot) => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                <Typography textAlign="center" variant='h2' py={2}>Completed Tasks
                                </Typography>
                                {
                                    completedToDos?.map((todo, index) => (
                                        <ToDoItem
                                            index={index}
                                            todo={todo}
                                            key={todo.id}
                                            todos={completedToDos} setToDos={setCompletedToDos} />
                                    ))
                                }
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </Box>
            </Grid>
        </Grid >
    )
};
export default ToDoList;
