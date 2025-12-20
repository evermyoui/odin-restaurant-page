export default class Menu {
    constructor(menuTitle, description, starCount, index){
        this.menuTitle = menuTitle;
        this.description = description;
        this.starCount = starCount;
        this.index = index;
    }
    menuDisplay(){
        const contentId = document.querySelector("#content");
        const body = document.querySelector("body");
        contentId.className = "";
        contentId.textContent = "";
        body.className = "";

        body.classList.add(`index${this.index}`);

        const menuDiv = document.createElement("div");
        menuDiv.classList.add("menuDiv");

        const backBtn = document.createElement("button");
        backBtn.classList.add("backBtn");
        backBtn.textContent = "BACK";

        const card = document.createElement("div");
        card.classList.add("card");

        const h2 = document.createElement("h2");
        h2.textContent = `${this.menuTitle}`;

        const p = document.createElement("p");
        p.textContent = `${this.description}`;

        const svgDiv = document.createElement("div");
        svgDiv.classList.add("svgDiv");
        this.svgRepeat(this.starCount, svgDiv);

        const orderDiv = document.createElement("div");
        orderDiv.classList.add("orderDiv");

        const orderBtn = document.createElement("button");
        orderBtn.classList.add("orderBtn");
        orderBtn.textContent = `ORDER`;

        const nextBtn = document.createElement("button");
        nextBtn.classList.add("nextBtn");
        nextBtn.textContent = `NEXT`;

        menuDiv.appendChild(backBtn);
        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(svgDiv);
        card.appendChild(orderDiv);
        menuDiv.appendChild(card);
        orderDiv.appendChild(orderBtn);
        menuDiv.appendChild(nextBtn);
        contentId.appendChild(menuDiv);
    }
    svgRepeat(count, svgDiv) {
    svgDiv.textContent = "";

    for (let i = 0; i < count; i++) {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "20");
        svg.setAttribute("height", "20");
        svg.setAttribute("viewBox", "0 0 100 100");

        const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        polygon.setAttribute(
            "points",
            "50,5 61,39 98,39 68,59 79,93 50,72 21,93 32,59 2,39 39,39"
        );
        polygon.setAttribute("fill", "gold");

        svg.appendChild(polygon);
        svgDiv.appendChild(svg);
    }
}

}
