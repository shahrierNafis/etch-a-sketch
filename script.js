let i = 16
let container = document.createElement("div")
container.id = "container"
while (i) {
    let j = 16
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
document.body.appendChild(container);

function changeColor() {
    this.classList.add("touched")
}