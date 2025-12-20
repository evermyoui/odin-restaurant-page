export default function aboutDisplay(){
    const contentId = document.querySelector("#content");
    const body = document.querySelector("body");
    contentId.className = "";
    contentId.textContent = "";
    body.className = "";
    body.classList.add("about");

    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("aboutDiv");
    const aboutDiv2 = document.createElement("div");
    aboutDiv2.classList.add("aboutDiv2");
    const h2 = document.createElement("h2");
    h2.textContent = `About`;
    const github = document.createElement("div");
    github.classList.add("github");
    const p = document.createElement("p");
    p.textContent = `github: @`;
    const a = document.createElement("a");
    a.href = "https://github.com/evermyoui";
    a.target = `_blank`;
    a.textContent = "evermyoui";

    github.appendChild(p);
    github.appendChild(a);
    aboutDiv2.appendChild(h2);
    aboutDiv2.appendChild(github);
    aboutDiv.appendChild(aboutDiv2);
    contentId.appendChild(aboutDiv);
}