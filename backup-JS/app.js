const app = document.querySelector("#app");

// // todo UI

// const heading = document.createElement("h1")
// heading.innerText = "Todo App"

// const createForm = document.createElement("form")
// const textInput = document.createElement("input")
// const addBtn = document.createElement("button")
// addBtn.innerText = "Add List"
// createForm.append(textInput)
// createForm.append(addBtn)

// const lists = document.createElement("ul")

// const list1 = document.createElement("li")
// list1.innerText ="Read JS book"
// lists.append(list1)

// const list2 = document.createElement("li")
// list2.innerText ="Eat Last"
// lists.append(list2)

// const list3 = document.createElement("li")
// list3.innerText ="Sleep Early"
// lists.append(list3)

// app.append(heading)
// app.append(createForm)
// app.append(lists)

// function run(){
// console.log("*");
// console.log("* *");
// console.log("* * *");

// }

// run()
// run()
// run()

// const tasks = ["Read JS book","Sleep well","Eat Last"]
// const crateHeading = (text) =>{
//     const heading = document.createElement("h1")
//     heading.innerText =text
//     return heading;

// }

// const createForm = () => {
//     const createform = document.createElement("form")
//     const textInput = document.createElement("input")
//     const addBtn = document.createElement("button")
//     addBtn.innerText = "Add List"
//     createform.append(textInput)
//     createform.append(addBtn)
//     return createform;
// }
// const createListGroup = () => {
//     const lists = document.createElement("ul")
//     lists.setAttribute("id","listGroup")
//     return lists;

// }

// const createList = (text) => {
//     const list = document.createElement("li")
//     list.innerText = text
//     return list

// }

// const renderList = (lists) => {
//     const listGroup = app.querySelector("#listGroup")
//     listGroup.innerHTML = ""
//     lists.forEach(list => listGroup.append(createList(list)))

// }

// (function(){
//     app.append(crateHeading("Todo App"))
//     app.append(createForm())
//     app.append(createListGroup())
//     renderList(tasks)

// })()

// class Todo {
//     constructor(){
//         this.tasks = ["Read JS book","Sleep well","Eat Last"]
//     }
//   crateHeading(text) {
//     const heading = document.createElement("h1");
//     heading.innerText = text;
//     return heading;
//   }

//   createForm() {
//     const createform = document.createElement("form");
//     const textInput = document.createElement("input");
//     const addBtn = document.createElement("button");
//     addBtn.innerText = "Add List";
//     createform.append(textInput);
//     createform.append(addBtn);
//     return createform;
//   }
//   createListGroup() {
//     const lists = document.createElement("ul");
//     lists.setAttribute("id", "listGroup");
//     return lists;
//   }

//   createList(text) {
//     const list = document.createElement("li");
//     list.innerText = text;
//     return list;
//   }

//   renderList(lists) {
//     const listGroup = app.querySelector("#listGroup");
//     listGroup.innerHTML = "";
//     lists.forEach((list) => listGroup.append(this.createList(list)));
//   }

//   render() {
//     app.append(this.crateHeading("Todo App"))
//     app.append(this.createForm())
//     app.append(this.createListGroup())
//     this.renderList(this.tasks)

//   }
// }

// const todo = new Todo
// todo.render()
