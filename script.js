let rows = 18
let cols = 33
let stop = 1

var arr = []
for (var i = 0; i < rows; i++) {
    arr[i] = []
    for (var j = 0; j < cols; j++) {
        arr[i][j] = 0
    }
}

for (let i = 0; i <= 593; i++) {
    var cfa = document.createElement('div');
    cfa.setAttribute('class', 'cell');
    cfa.setAttribute('id', i);
    document.getElementsByClassName("grid")[0].appendChild(cfa);
}

const grid = document.getElementsByClassName('cell')
const changeColor = function(cell) {
    if (cell.style.background === 'black') {
        cell.style.background = "white";
    } else {
        cell.style.background = "black";
    }
}

Array.from(grid).forEach(
    (cell) => {
        cell.addEventListener("click", () => clickHandler(cell))
    }
)

let cells = Array.from(grid)

const clickHandler = function(cell) {
    var index = parseInt(cell.id)
    changeColor(cells[index])

    var i = ~~(index / cols)
    var j = index - i * cols
    arr[i][j] = 1 - arr[i][j]

}

let stbutn = document.querySelector('#start')
stbutn.addEventListener("click", () => setTimeout(nextItr(), 5000))

let pabutn = document.querySelector('#stop')
pabutn.addEventListener("click", () => changeStop())

const changeStop = function() {
    stop = 1 - stop
}

function calc(i, j) {
    var x = arr[i - 1][j - 1] + arr[i - 1][j] + arr[i - 1][j + 1] + arr[i][j - 1] + arr[i][j + 1] + arr[i + 1][j - 1] + arr[i + 1][j] + arr[i + 1][j + 1];
    return x;
}

function show(arr) {
    for (var index = 0; index <= 593; index++) {
        var i = ~~(index / cols)
        var j = index - i * cols

        if (arr[i][j] == 1) {
            cells[index].style.background = "black";
        } else cells[index].style.background = "white";
    }
}

const nextItr = function() {
    transform()
}

const transform = function() {
    var newarr = []
    for (var i = 0; i < rows; i++) {
        newarr[i] = []
        for (var j = 0; j < cols; j++) {
            newarr[i][j] = 0
        }
    }

    for (var i = 1; i < rows - 1; i++) {
        for (var j = 1; j < cols - 1; j++) {
            var x = calc(i, j)
            if (arr[i][j] == 1) {
                if (x == 2 || x == 3) {
                    newarr[i][j] = 1
                }
            } else {
                if (x == 3) newarr[i][j] = 1
            }
        }
    }

    arr = newarr
    show(arr)
}

//clear, setinterval