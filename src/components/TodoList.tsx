import { Component } from "react";
import { Task } from "../App";
import { TodoEntry } from "./TodoEntry";

type TodoListProps = {
  tasks: Task[];
  toggleTodoStatus: (id: number) => void;
  deleteAll: () => void;
  deleteCompletedTasks: () => void;
  deleteTask: (id: number) => void;
  updateTask: (id: number, taskText: string) => void;
};

export class TodoList extends Component<TodoListProps> {
  render() {
    const {
      tasks,
      toggleTodoStatus,
      deleteAll,
      deleteCompletedTasks,
      deleteTask,
      updateTask,
    } = this.props;
    const tasksJsx = tasks.map((t: Task) => (
      <li className="list-group-item" key={t.id}>
        <TodoEntry
          task={t}
          toggleTodoStatus={toggleTodoStatus}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      </li>
    ));
    return (
      <>
        <ul className="list-group">{tasksJsx}</ul>
        {tasks.length > 0 && (
          <div>
            <button onClick={deleteAll} className="btn btn-outline-danger ">
              Delete all tasks
            </button>
            <button
              onClick={deleteCompletedTasks}
              className="btn btn-outline-danger "
            >
              Delete completed tasks
            </button>
          </div>
        )}
      </>
    );
  }
}

export default TodoList;
