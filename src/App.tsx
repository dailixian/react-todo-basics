import { useState } from "react";
import { Header } from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export type Task = {
  id: number;
  text: string;
  completed: boolean;
  timestamp: Date;
};

function App() {
  const [tasks, setTasks] = useState<Array<Task>>([
    { id: 1, text: "clean car", completed: false, timestamp: new Date() },
    { id: 2, text: "buy thing", completed: false, timestamp: new Date() },
    { id: 3, text: "eat lunch", completed: true, timestamp: new Date() },
  ]);
  const addTask = (text: string) => {
    const newTask: Task = {
      text,
      completed: false,
      timestamp: new Date(),
      id:
        tasks.length === 0
          ? 1
          : 1 + Math.max(...tasks.map((t) => Number(t.id))),
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTodoStatus = (id: number) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    task.completed = !task.completed;
    setTasks([...tasks]);
  };

  const deleteTask = (id: number) => {
    const remaining = tasks.filter((t) => t.id !== id);
    setTasks(remaining);
  };

  const updateTask = (id: number, text: string) => {
    const current = tasks.find((t) => t.id === id);
    if (current) {
      current.text = text;
      setTasks([...tasks]);
    }
  };

  const deleteAll = () => {
    setTasks([]);
  };

  const deleteCompletedTasks = () => {
    const remaining = tasks.filter((t) => !t.completed);
    setTasks(remaining);
  };

  return (
    <>
      <Header tasks={tasks}></Header>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <TodoForm addTask={addTask}></TodoForm>
          </div>
          <div className="col-7">
            <TodoList
              tasks={tasks}
              toggleTodoStatus={toggleTodoStatus}
              deleteAll={deleteAll}
              deleteCompletedTasks={deleteCompletedTasks}
              deleteTask={deleteTask}
            ></TodoList>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
