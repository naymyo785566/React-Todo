//JSX


//import { createElement } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"




const rootElement = document.querySelector("#root");
const root = createRoot(rootElement)
root.render(<App/>)





// // const heading = document.createElement("h1")
// // heading.innerText = "Todo App"

// // rootElement.append(heading)
// const tasks = ["Read JS book","Sleep well","Eat Last","Meet with sayar"]

// // const x = tasks.map((el) => console.log(el))
// // console.log(x);

// const root = createRoot(rootElement);

// root.render(
//   createElement(
//     "div",
//     null,
//     createElement("h1", null, "Todo App"),
//     createElement(
//       "form",
//       null,
//       createElement("input", null, null),
//       createElement("button", null, "Add new")
//     ),
//     createElement(
//       "ul",
//       null,
//       // createElement("li", null, "Read Js Book"),
//       // createElement("li", null, "Sleep Well"),
//       // createElement("li", null, "Eat last")
//       tasks.map((task,index) => createElement("li",{key:index,className: "list pb-5",title:"hello"},task))
//     )
//   )
// );
