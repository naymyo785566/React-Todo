import React from "react";
import EmptyList from "./EmptyList";
import List from "./List";


const ListGroup = (props) => {
  return (
    <div id="listGroup">
      <EmptyList />
      {props.tasks.map((task) => (
        <List
          key={task.id}
          checkTask={props.checkTask}
          job={task.job}
          isDone={task.isDone}
          id={task.id}
          deleteTask={props.deleteTask}
          editTask={props.editTask}
        />
      ))}
     
    </div>
  );
};

export default ListGroup;
