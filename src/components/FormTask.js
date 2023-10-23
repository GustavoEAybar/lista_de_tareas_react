import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import TaskList from "./TaskList";


const FormTask = () => {
  let taskFromLocalStorage = JSON.parse(localStorage.getItem('taskslist'))||[];
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(taskFromLocalStorage);

  const handlesubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask('');
  }

  useEffect(()=>{
    localStorage.setItem('taskslist', JSON.stringify(tasks));
  },[tasks]);

  const deleteTask = (taskName) => {
    let filterArray = tasks.filter(task => task !== taskName);
    setTasks(filterArray);
  }
  return (
    <>
      <Form onSubmit={handlesubmit}>
        <Form.Group className="my-3 text-center">
          <Form.Control
            className="mb-3"
            type="text"
            placeholder="Ingresar una tarea"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <section className="container">
        <TaskList tasksArray={ tasks } deleteTask={deleteTask}></TaskList>
      </section>
    </>
  );
};

export default FormTask;
