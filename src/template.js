export default function homeDisplay(){
    const contentId = document.querySelector("#content");
    contentId.innerHTML = ``;
    const hDiv = document.createElement("div");
    hDiv.classList.add("h1Div");

    const h1 = document.createElement("h1");
    h1.innerHTML = `WELCOME TO <br> SINAGTALA`;

    const p = document.createElement("p");
    p.textContent = `A restaurant dedicated to a beloved one`;

    hDiv.appendChild(h1);
    hDiv.appendChild(p);
    contentId.appendChild(hDiv);
}