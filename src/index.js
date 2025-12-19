import homeDisplay from "./template.js";
import "./style.css";

//initial display.
homeDisplay();


const homeBtn = document.querySelector("#home");

homeBtn.addEventListener("click", homeDisplay);