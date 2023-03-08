import React from "react";
import { Task } from "../App";

type TodoEntryProps = {
  task: Task;
  toggleTodoStatus: (id: number) => void;
};
export const TodoEntry: React.FC<TodoEntryProps> = (props) => {
  const { task, toggleTodoStatus } = props;
  return (
    <>
      <span
        onClick={()=>toggleTodoStatus(task.id)}
        style={{
          cursor: "pointer",
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.text}
      </span>
    </>
  );
};
