import React from "react";
import { ListGroup } from "react-bootstrap";

const TaskItem = ({ pending, deleteTask }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {pending} <button className="btn btn-danger" onClick={()=>deleteTask(pending)}>X</button>
    </ListGroup.Item>
  );
};

export default TaskItem;
