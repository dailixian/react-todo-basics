import React, { useState } from "react";

type TodoFormProps = {
  addTask: (text: string) => void;
}
const TodoForm: React.FC<TodoFormProps> = (props) => {
  const [task, setTask] = useState("");
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    props.addTask(task);
    setTask("");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setTask(e.target.value)}
          value={task}
          placeholder="what would u like to do"
        ></input>
      </form>
    </>
  );
};

export default TodoForm;
