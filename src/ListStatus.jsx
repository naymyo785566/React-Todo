import React from "react";

const ListStatus = (props) => {
  return (
    <div className="flex justify-between items-center mb-5">
      <p className="font-bold font-heading">Your List</p>
      <p className="bg-zinc-700 text-zinc-50 text-xs px-3 py-2 rounded-full">
        Done (<span id="doneCount">{props.tasks.filter(task => task.isDone === true).length}</span>/ <span id="totalCount">{props.tasks.length}</span>)
      </p>
    </div>
  );
};

export default ListStatus;
