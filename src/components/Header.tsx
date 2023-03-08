import React, { Component } from "react";
import { Task } from "../App";

type HeaderProps = {
  tasks: Task[];
};

export class Header extends Component<HeaderProps> {
  render() {
    const { tasks } = this.props;
    const completedCount = tasks.filter((t) => t.completed).length;
    const taskCount = tasks.length;
    return (
      <>
        <div className="alert alert-primary">
          <div className="container">
            <h1>Task Manager App</h1>
          </div>
          <div className="container">
            {taskCount > 0 && (
              <p>
                Tasks {completedCount}/{taskCount} completed!
              </p>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Header;
