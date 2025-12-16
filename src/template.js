export default function homeDisplay(){
    const contentId = document.querySelector("#content");

    const h1 = document.createElement("h1");
    h1.textContent = `WELCOME TO SINAGTALA`;

    const p = document.createElement("p");
    p.textContent = `A restaurant dedicated to a beloved one`;

    const a = document.createElement("a");
    a.href = `./menu.html`;
    a.textContent = `MENU`;

    contentId.appendChild(h1);
    contentId.appendChild(p);
    contentId.appendChild(a);
}