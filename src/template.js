export default function homeDisplay(){
    const contentId = document.querySelector("#content");

    const h1 = document.createElement("h1");
    h1.textContent = `WELCOME TO SINAGTALA`;

    const p = document.createElement("p");
    p.textContent = `A restaurant dedicated to a beloved one`;

    contentId.appendChild(h1);
    contentId.appendChild(p);
}