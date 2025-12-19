export default function homeDisplay(){
    const contentId = document.querySelector("#content");
    const body = document.querySelector("body");
    contentId.className = "";
    contentId.classList.add("home");

    contentId.textContent = ``;
    body.className = "";
    body.classList.add("home");

    const hDiv = document.createElement("div");
    hDiv.classList.add("h1Div");

    const h1 = document.createElement("h1");
    h1.textContent = `WELCOME TO`;
    const br = document.createElement("br");
    const h1Sinagtala = document.createElement("h1");
    h1Sinagtala.textContent = "SINAGTALA";

    const p = document.createElement("p");
    p.textContent = `A restaurant dedicated to a beloved one`;

    hDiv.appendChild(h1);
    hDiv.appendChild(br);
    hDiv.appendChild(h1Sinagtala);
    hDiv.appendChild(p);
    contentId.appendChild(hDiv);
}