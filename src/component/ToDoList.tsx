import React from "react";
import { ToDo } from "../model";
import { Grid, Box, Typography } from '@mui/material';
import ToDoItem from "./ToDoItem";
import { Droppable } from 'react-beautiful-dnd';

interface Props {
    todos: ToDo[];
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
    completedToDos: ToDo[];
    setCompletedToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoList: React.FC<Props> = ({ todos, setToDos, completedToDos, setCompletedToDos }: Props) => {
    return (
        <Grid container mt={5}>
            <Grid item xs={6} >
                <Box
                    bgcolor="primary.main"
                    minHeight="100vh"
                >
                    <Droppable droppableId="ToDosList">
                        {(provided, snapshot) => (
                            <div ref={provided.innerRef} {...provided.droppableProps} >
                                <Typography variant='h3' textAlign="center" py={2}>Active Tasks
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
                    bgcolor="warning.main"
                    minHeight="100vh"
                >
                    <Droppable droppableId="ToDosRemove">
                        {(provided, snapshot) => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                <Typography textAlign="center" variant='h3' py={2}>Completed Tasks
                                </Typography>
                                {
                                    completedToDos.map((todo, index) => (
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
