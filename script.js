for (let i = 0; i <= 593; i++) {
    const cfa = document.createElement('div');
    cfa.classList.add('cell');
    cfa.id = i
    document.querySelector('.grid').appendChild(cfa);
}

var gridi = document.getElementsByClassName("cell");

Array.from(gridi).forEach(click => click.addEventListener("click", function changeColor() {
    if (click.style.background === 'black') {
        click.style.background = "white";
    } else {
        click.style.background = "black";
    }
}));

let arr2d = new Array(18);
for (let i = 0; i < 18; i++) {
    arr2d[i] = new Array(33);
    for (let j = 0; j < 33; j++) {
        arr2d[i][j] = 0;
    }
}