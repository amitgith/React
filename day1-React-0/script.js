// let obj = {
//   name: "Amit",
//   age: 26,
//   address: "CG",
//   company: "sheryians",
// };
// let fn = ({ name, age }) => {
//   // destructuring
//   console.log(name, age);
// };
// fn(obj);

// Lexical Scope
// let a = 990;
// let print = () => {
//   console.log(a);
// };
// let ab = () => {
//   let a = 80;
//   print();
// };
// ab();

// console.log(window);
// console.log(React);

// let head1 = document.createElement("h1");
// head1.textContent = "Heading 1";
// document.body.append(head1);
// // console.log(head1);

// let divBox = document.createElement("div");
// divBox.id = "main";
// divBox.classList.add("img", "sectkion");
// divBox.setAttribute("class", "card mohi");
// let h2 = document.createElement("h2");
// h2.textContent = "Heading 2";
// h2.className = "h2";
// divBox.append(h2);
// document.body.append(divBox);
// console.log(divBox);

// const divBox = document.createElement("div");
// divBox.id = "main";
// divBox.classList.add("box1", "box2");
// const h1 = document.createElement("h1");
// h1.id = "head";
// h1.textContent = "i am inner h1";
// divBox.append(h1);
// document.body.append(divBox);
// console.log(divBox);

// let realDomElem = document.querySelector(".root");
// let rh1 = React.createElement("h1", {}, "I am heading1");
// let rootOfReact = ReactDOM.createRoot(realDomElem);
// rootOfReact.render(rh1);

// const realDomElem = document.querySelector(".root");
// const rh1 = React.createElement(
//   "div",
//   { id: "box" },
//   React.createElement(
//     "h1",
//     { className: "head" },
//     React.createElement("span", { id: "inside" }, "I am inside sapn"),
//   ),
// );
// let rootOfReact = ReactDOM.createRoot(realDomElem);
// rootOfReact.render(rh1);
// console.log(rh1);

// const realDomElem = document.querySelector("main");
// const rh1 = React.createElement(
//   "header",
//   {},
//   React.createElement(
//     "nav",
//     {},
//     React.createElement("h1", {}, "Home"),
//     React.createElement("h1", {}, "About"),
//     React.createElement("h1", {}, "Services"),
//     React.createElement("h1", {}, "Contact"),
//   ),
// );

// const mainOfReact = ReactDOM.createRoot(realDomElem);
// mainOfReact.render(rh1);
// console.log(rh1);
// const rootElement = document.querySelector(".root");
// const appElement = React.createElement("div", {}, "Hello React");
// const root = ReactDOM.createRoot(rootElement);
// root.render(appElement);

// Q2
// Ek h1 banao jisme likha ho:
// "My First Heading"

// const rootElement = document.querySelector(".root");
// const appElement = React.createElement("h1", {}, "My First Heading");
// const root = ReactDOM.createRoot(rootElement);
// root.render(appElement);

// Q3
// Ek div ke andar 2 paragraph (p) banao:
// "Para 1"
// "Para 2"

// const rootElement = document.querySelector(".root");
// const appElement = React.createElement(
//   "div",
//   {},
//   React.createElement("p", {}, "para 1"),
//   React.createElement("p", {}, "para 1"),
// );
// const root = ReactDOM.createRoot(rootElement);
// root.render(appElement);

// 🟡 Level 2 (Structure)
// Q4
// Ek section banao jisme:
// h2 → "About Me"
// p → "I am learning React"

// const rootElement = document.querySelector(".root");
// const appElement = React.createElement(
//   "section",
//   {},
//   React.createElement("h2", {}, "About Me"),
//   React.createElement("p", {}, "I am learning React"),
// );
// const root = ReactDOM.createRoot(rootElement);
// root.render(appElement);

// Q5
// Ek simple card banao:
// div (class: card)
// h1 → "Title"
// p → "Description"

// const rootElement = document.querySelector(".root");
// const appElement = React.createElement(
//   "div",
//   { className: "card" },
//   React.createElement("h1", {}, "Title"),
//   React.createElement("p", {}, "Description"),
// );
// const root = ReactDOM.createRoot(rootElement);
// root.render(appElement);

// 🔴 Level 3 (Navbar Practice)
// Q6
// React se navbar banao:
// Home | Services | Contact
// Use:
// nav
// ul
// li

// const rootElement = document.querySelector(".root");
// const appElement = React.createElement(
//   "nav",
//   {},
//   React.createElement(
//     "ul",
//     {},
//     React.createElement("li", {}, "Home"),
//     React.createElement("li", {}, "Services"),
//     React.createElement("li", {}, "Contact"),
//   ),
// );
// const root = ReactDOM.createRoot(rootElement);
// root.render(appElement);

// Q7 (Important)
// Header banao:
// header
// nav
// ul
// 4 li items

// const rootElement = document.querySelector(".root");
// const appElement = React.createElement(
//   "header",
//   {},
//   React.createElement(
//     "nav",
//     {},
//     React.createElement(
//       "ul",
//       {},
//       React.createElement("li", {}, "Apple"),
//       React.createElement("li", {}, "Apple"),
//       React.createElement("li", {}, "Apple"),
//       React.createElement("li", {}, "Apple"),
//     ),
//   ),
// );
// const root = ReactDOM.createRoot(rootElement);
// root.render(appElement);

// 🔥 Level 4 (Interview Type)
// Q8
// Nested structure banao:
// div
//  └── section
//       └── article
//            └── h1 + p

// const rootElement = document.querySelector(".root");
// const appElement = React.createElement(
//   "div",
//   {},
//   React.createElement(
//     "section",
//     {},
//     React.createElement(
//       "article",
//       {},
//       React.createElement("h1", {}, "heading"),
//       React.createElement("p", {}, "para"),
//     ),
//   ),
// );
// const root = ReactDOM.createRoot(rootElement);
// root.render(appElement);

// Q9 (Tricky)
// Ek element banao jisme:
// div
// andar h1
// andar span
// aur span ke andar text

// const rootElement = document.querySelector(".root");
// const appElement = React.createElement(
//   "div",
//   {},
//   React.createElement("h1", {}, React.createElement("span", {}, "Hello")),
// );
// const root = ReactDOM.createRoot(rootElement);
// root.render(appElement);

// 💪 Challenge
// 👉 Q10 (Real UI)
// Ek mini page banao:
// header (navbar)
// main section
// footer

// const rootElement = document.querySelector(".root");
// const appElement = React.createElement("header", {}, "heading",);

// const root = ReactDOM.createRoot(rootElement);
// root.render(appElement);

// import { a } from "./app.js";
// console.log(a);

// ✅ Updating in React

// ✅ Reconciliation
// Reconciliation React ka process hai jisme React check karta hai ki UI mein kya change hua hai aur
// sirf wahi part update karta hai jo change hua hai.

// Reconciliation = Changes identify karne ke baad un changes ko actual document me apply karna.

// ✅ Diffing Algorithm
// Diffing Algorithm React ka algorithm hai jo Old Virtual DOM aur New Virtual DOM ko compare karta hai
//  aur pata lagata hai ki exactly kya change hua hai.

// Diffing = Dono documents ko compare karke batana ki kya-kya change hua.

// ✅ Render Phase

// Render Phase wo phase hai jahan React calculate karta hai ki UI kaisa dikhna chahiye.
// Is phase me React:
// Components ko execute karta hai
// JSX ko Virtual DOM me convert karta hai
// Old Virtual DOM aur New Virtual DOM ko compare karta hai (Diffing)
// Decide karta hai ki kya update karna hai
// ⚠️ Is phase me Real DOM update nahi hota.

// ✅ Commit Phase
// Commit Phase wo phase hai jahan React Render Phase me calculate kiye gaye changes ko actual Real DOM me apply karta hai.
// Simple words me:
// Render Phase sochta hai kya change karna hai.
// Commit Phase woh change Real DOM me kar deta hai.

// ✅ React Fiber Architecture

// ✅ Babel

// ✅ OXC
