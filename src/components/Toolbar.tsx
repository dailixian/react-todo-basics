import { Component } from "react";
import { Task } from "../App";

type ToolbarProps = {
  task: Task;
  deleteTask: (id: number) => void;
  setIsEditable: (isEditable: boolean) => void;
  isEditable: boolean;
};
export class Toolbar extends Component<ToolbarProps> {
  render() {
    const { task, deleteTask, isEditable, setIsEditable } = this.props;
    return (
      <>
        <span className="toolbar">
          {!isEditable ? (
            <button
              className="btn btn-link bi bi-pencil"
              onClick={() => setIsEditable(true)}
            ></button>
          ) : (
            <button
              className="btn btn-link bi bi-x-circle"
              onClick={() => setIsEditable(false)}
            ></button>
          )}
          <button
            className="btn btn-link bi bi-trash"
            onClick={() => deleteTask(task.id)}
          ></button>
          <button className="btn btn-link bi bi-arrow-up-circle"></button>
          <button className="btn btn-link bi bi-arrow-down-circle"></button>
        </span>
      </>
    );
  }
}

export default Toolbar;
