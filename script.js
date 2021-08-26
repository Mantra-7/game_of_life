for (let i = 0; i <= 593; i++) {
    const cfa = document.createElement('div');
    cfa.classList.add('cell');
    cfa.id = i
    cfa.addEventListener("click", () => clickHandler(cfa))
    document.querySelector('.grid').appendChild(cfa);
}

var grid = document.getElementsByClassName("cell");


Array.from(grid).forEach(click => click.addEventListener("click", function changeColor() {
    if (click.style.background === 'black') {
        click.style.background = "white";
    } else {
        click.style.background = "black";
    }
}));

/*
const changeColor = function(cell) {
    if (cell.style.background === 'black') {
        cell.style.background = "white";
    } else {
        cell.style.background = "black";
    }
}

let cells = Array.from(grid)

const clickHandler = function(cell) {
    // get the box id, which will coincide with its position in the array
    index = parseInt(cell.id)
    changeColor(cells[index])
}
*/

let call = Array.from(grid)

let arr2d = new Array(18);
for (let i = 0; i < 18; i++) {
    arr2d[i] = new Array(33);
    for (let j = 0; j < 33; j++) {
        arr2d[i][j] = 0;
        if (i == 3) arr2d[i][j] = 1;
    }
}

for (let i = 0; i < 18; i++) {
    for (let j = 0; j < 33; j++) {
        if (arr2d[i][j] == 0) {
            call[33 * i + j].style.background = "white";
        } else {
            call[33 * i + j].style.background = "black";
        }
    }
}