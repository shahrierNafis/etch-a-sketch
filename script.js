function reset(x) {
    document.body.innerHTML = "";
    let i = x
    let container = document.createElement("div")
    container.id = "container"
    while (i) {
        let j = x
        let row = document.createElement("div")
        row.classList.add("row");
        while (j) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", changeColor)
            row.appendChild(square);
            j--;
        }
        container.appendChild(row);
        i--;
    }
    const button = document.createElement("button")
    button.textContent = "Reset"
    button.addEventListener("click", () => {
        reset(prompt("How many squares per side? (Maximum: 100)", 64));
    });
    document.body.appendChild(button)
    document.body.appendChild(container);
    console.log(x)
}
function changeColor() {
    this.classList.add("touched")
}
reset(64);
