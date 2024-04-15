import React, { useState } from "react";

import Heading from "./Heading";
import ListCreateForm from "./ListCreateForm";
import ListStatus from "./ListStatus";
import ListGroup from "./ListGroup";
import { Toaster } from 'react-hot-toast';
const App = () => {
  const [tasks, setTask] = useState([
    {
      id: 1,
      job: "Read JS book",
      isDone: false,
    },
    {
      id: 2,
      job: "Meet with client",
      isDone: true,
    },
    {
      id: 3,
      job: "Prepare for interview",
      isDone: false,
    },
    {
      id: 4,
      job: "Read react doc",
      isDone: false,
    },
  ]);
  const addTask = (job) => {
    const newTask = {
      id: Date.now,
      job,
      isDone: false,
    };
    setTask([...tasks, newTask]);
  };
  const editTask = (newJob,id) => {
    setTask(
      tasks.map((task) => {
        if (id === task.id) {
          task.job = newJob
        }
        return task;
      })
    );
  }
  const checkTask = (id) => {
    setTask(
      tasks.map((task) => {
        if (id === task.id) {
          task.isDone = !task.isDone;
        }
        return task;
      })
    );
  };
  const deleteTask = (id) => {
    setTask(
      tasks.filter((task) => task.id !== id)
    );
  };
  return (
    <div className="bg-white w-[450px] mx-auto mt-10 p-10">
      <Heading text="Todo App" />

      <ListCreateForm addTask={addTask} />
      <ListStatus tasks={tasks} />
      <ListGroup editTask={editTask} deleteTask={deleteTask} checkTask={checkTask} tasks={tasks} />
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};

export default App;
