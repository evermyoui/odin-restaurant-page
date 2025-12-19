import homeDisplay from "./template.js";
import menuDisplay from "./menu.js";

import "./style.css";


//initial display.
homeDisplay();

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");

homeBtn.addEventListener("click", homeDisplay);
menuBtn.addEventListener("click", menuDisplay);