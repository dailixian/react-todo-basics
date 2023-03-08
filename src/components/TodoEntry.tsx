import React from "react";
import { Task } from "../App";
import Toolbar from "./Toolbar";

type TodoEntryProps = {
  task: Task;
  toggleTodoStatus: (id: number) => void;
  deleteTask: (id: number) => void;
};
export const TodoEntry: React.FC<TodoEntryProps> = (props) => {
  const { task, toggleTodoStatus, deleteTask } = props;
  return (
    <>
      <div className="todoEntry row">
        <div className="col">
          <span
            onClick={() => toggleTodoStatus(task.id)}
            style={{
              cursor: "pointer",
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.text}
          </span>
        </div>
        <div className="col-4">
          <Toolbar task={task} deleteTask={deleteTask}></Toolbar>
        </div>
      </div>
    </>
  );
};
