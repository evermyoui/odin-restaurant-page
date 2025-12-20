import homeDisplay from "./template.js";
import Menu from "./menu.js";

import "./style.css";


//initial display.
homeDisplay();

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contentId = document.querySelector("#content");

let currentMenu = 0;

let menu = [
    new Menu("SPAGHETTI", "Spaghetti is a classic Italian pasta made from durum wheat, water, and sometimes eggs, formed into long, thin, solid cylindrical strands"
        , 5, 0
    ),
    new Menu("TUNA", "A versatile meal featuring flaky, firm fish, often canned and mixed with mayo, celery, and onion for salads or sandwiches",
        4, 1
    ),
    new Menu("CROFFLE BERRY", "a hybrid pastry combining the flaky, buttery layers of a croissant with the crispy, grid-like texture of a waffle",
        5, 2
    )
];

homeBtn.addEventListener("click", homeDisplay);
menuBtn.addEventListener("click", () => {
    menu[0].menuDisplay();
});

contentId.addEventListener("click", (e)=> {
    if (e.target.classList.contains("nextBtn")){
        currentMenu = (currentMenu + 1) % menu.length;
        menu[currentMenu].menuDisplay();
    }
    if (e.target.classList.contains("backBtn")){
        currentMenu = (currentMenu - 1) % menu.length;
        menu[currentMenu].menuDisplay();
    }
});