import { useState } from "react";
import { Header } from "./components/Header";
import TodoForm from "./components/TodoForm";

type Task = {
  id: number;
  text: string;
  completed: boolean;
  timestamp: Date;
}
function App() {
  const [tasks, setTasks] = useState<Array<Task>>([])
  const addTask = (text: string) => {
    const newTask: Task = {
      text, 
      completed: false,
      timestamp: new Date(),
      id: tasks.length === 0 ? 1: 1 + Math.max(...tasks.map(t=>Number(t.id)))
    }
    setTasks([...tasks, newTask]);
    
  }

  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <TodoForm addTask={addTask}></TodoForm>
          </div>
          <div className="col-7">
            {JSON.stringify(tasks)}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
