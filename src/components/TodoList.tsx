import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoContextType } from "../contexts/TodoContextType";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const { todos } = useContext<TodoContextType>(TodoContext)
  return (
    <div>
      <table className="uk-table">
        <caption>Lista de Tarefas</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Tarefas</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {
            todos?.map(
              todo => (
                <TodoListItem
                  key={todo.id}
                  todo={todo}
                />
              )
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;