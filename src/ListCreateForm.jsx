import React, { useState } from "react";
import toast from "react-hot-toast"

const ListCreateForm = (props) => {
  const [text, setText] = useState("");

  const handleTextInput = (event) => {
    setText(event.target.value);
  };
  const handleAddBtn = () => {
    props.addTask(text);
    setText("")
    
  }
  const handleEnter = (event) => {
    if(event.key === "Enter"){
      props.addTask(text);
      setText("")
      toast.success("List created")
    
    }
   
  }
  return (
    <div className="flex mb-5">
      <input
        type="text"
        id="textInput"
        className="border-2 border-zinc-700 flex-grow px-3 focus-visible:outline-none"
        value={text}
        onChange={handleTextInput}
        onKeyUp={handleEnter}
      />
      <button onClick={handleAddBtn} className="bg-zinc-700 text-zinc-50 p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
};

export default ListCreateForm;
