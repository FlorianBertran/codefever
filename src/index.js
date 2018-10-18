console.log(`I'm a silly entry point`);

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
store.subscribe(() => console.log("Hello world"));
store.dispatch(
  addArticle({ name: "React Redux Tutorial for Beginners", id: 1 })
);
window.iAmJavascriptES6 = iAmJavascriptES6;

import style from "./main.css";
import index from "./js/index";
