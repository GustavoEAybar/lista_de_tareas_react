import React from "react";
import { ListGroup } from "react-bootstrap";
import TaskItem from "./TaskItem";

const TaskList = (props) => {
  return (
    <div>
      <ListGroup>
        {props.tasksArray.map((task, index) => (
          <TaskItem key={index} pending={task} deleteTask={props.deleteTask}></TaskItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default TaskList;
