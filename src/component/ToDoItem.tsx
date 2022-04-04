import React from "react";
import { ToDo } from "../model";

type Props = {

todo: ToDo,
todos: ToDo[]
setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoItem = ({ todo, todos, setToDos }: Props) => {
    return <div> </div>
};
export default ToDoItem;