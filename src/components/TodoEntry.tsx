import React, { useState } from "react";
import { Task } from "../App";
import Toolbar from "./Toolbar";

type TodoEntryProps = {
  task: Task;
  toggleTodoStatus: (id: number) => void;
  deleteTask: (id: number) => void;
  updateTask: (id: number, taskText: string) => void;
};
export const TodoEntry: React.FC<TodoEntryProps> = (props) => {
  const { task, toggleTodoStatus, deleteTask, updateTask } = props;
  const [isEditable, setIsEditable] = useState(false);
  const [taskText, setTaskText] = useState(task.text);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    updateTask(task.id, taskText);
    setIsEditable(false);
  };
  return (
    <>
      <div className="todoEntry row">
        <div className="col">
          {isEditable ? (
            <>
              <form onSubmit={submitHandler}>
                <input
                  className="form-control"
                  value={taskText}
                  onChange={(e) => {
                    setTaskText(e.target.value);
                  }}
                ></input>
              </form>
            </>
          ) : (
            <span
              onClick={() => toggleTodoStatus(task.id)}
              style={{
                cursor: "pointer",
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
          )}
        </div>
        <div className="col-4">
          <Toolbar
            task={task}
            deleteTask={deleteTask}
            setIsEditable={setIsEditable}
          ></Toolbar>
        </div>
      </div>
    </>
  );
};
