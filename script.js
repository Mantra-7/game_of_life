let rows = 17;
let cols = 33;


var arr = [];
for (var i = 0; i < rows+200; i++) {
    arr[i] = [];
    for (var j = 0; j < cols+200; j++) {
        arr[i][j] = 0;
    }
}

for (let i = 0; i < rows*cols; i++) {
    var cfa = document.createElement('div');
    cfa.setAttribute('class', 'cell');
    cfa.setAttribute('id', i);
    document.getElementsByClassName("grid")[0].appendChild(cfa);
}

let grid = document.getElementsByClassName('cell')
const changeColor = function(cell) {
    if (cell.style.background === 'black') {
        cell.style.background = "white";
    } else {
        cell.style.background = "black";
    }
}

for(let i=0;i<grid.length;i++)
{
    grid[i].style.width=((screen.width-17)/cols + "px");
    grid[i].style.height=((screen.height-200)/rows + "px");

}

Array.from(grid).forEach(
    (cell) => {
        cell.addEventListener("click", () => clickHandler(cell));
    }
)

let cells = Array.from(grid);

const clickHandler = function(cell) {
    var index = parseInt(cell.id);
    changeColor(cells[index]);

    var i = ~~(index / cols);
    var j = index - i * cols;
    arr[i+100][j+100] = 1 - arr[i+100][j+100];

}

function show(arr) {
    for (let i = 100; i < rows+100; i++) 
    {
        for(let j=100;j<cols+100;j++)
        {
            let index=cols*(i-100)+(j-100);
        if (arr[i][j] == 1) {
            cells[index].style.background = "black";
        } else cells[index].style.background = "white";
    }
    }
}

function transform() {
    var newarr = [];
    for (var i = 0; i < rows+200; i++) {
        newarr[i] = [];
        for (var j = 0; j < cols+200; j++) {
            newarr[i][j] = 0;
        }
    }

    for (var i = 1; i < rows + 199; i++) {
        for (var j = 1; j < cols + 199; j++) {
            var x = calc(i, j);
            if (arr[i][j] == 1) {
                if (x == 2 || x == 3) {
                    newarr[i][j] = 1;
                }
            } else {
                if (x == 3) newarr[i][j] = 1;
            }
        }
    }

    arr = newarr;
    show(arr);
}

let stbutn = document.querySelector('#start');
stbutn.addEventListener("click", () => Itr());

let pabutn = document.querySelector('#stop');
document.querySelector("#stop").style.background="green";
pabutn.addEventListener("click", () => Stop());

let clbutn = document.querySelector('#clear');
clbutn.addEventListener("click", () => Clear());

let setbutn = document.querySelector('#set');
setbutn.addEventListener("click", () => setRC());

function calc(i, j) {
    var x = arr[i - 1][j - 1] + arr[i - 1][j] + arr[i - 1][j + 1] + arr[i][j - 1] + arr[i][j + 1] + arr[i + 1][j - 1] + arr[i + 1][j] + arr[i + 1][j + 1];
    return x;
}

let clr;
function Itr()
{
    let color=document.querySelector("#start").style.background;

    if(color!="green")
    {
        document.querySelector("#start").style.background="green";
        document.querySelector("#stop").style.background="rgb(73, 226, 43)";
        clr = setInterval(transform,1000);
    }
}

function Stop()
{
    let color=document.querySelector("#stop").style.background;
    if(color!="green")
    {
        document.querySelector("#stop").style.background="green";
        document.querySelector("#start").style.background="rgb(73, 226, 43)";
        clearInterval(clr);
    }
}

function Clear()
{
    for (var i = 0; i < rows+200; i++) {
        for (var j = 0; j < cols+200; j++) {
            arr[i][j] = 0;
        }
    }
    show(arr);
}

//change nrow from string to int

function setRC(){
    let nrow=document.querySelector("#row").value;
    let ncol=document.querySelector("#col").value;

    nrow+=200;
    ncol+=200;

    let narr=[];
    for(let i=0;i<nrow;i++)
    {
        narr[i]=[];
        for(let j=0;j<ncol;j++)
        {
            narr[i][j]=0;
        }
    }

    rows+=200;
    cols+=200;
    if(rows<nrow && cols<ncol)
    {
        let st1=~~((nrow-rows)/2);
        let st2=~~((ncol-cols)/2);
        for(let i=st1;i<st1+rows;i++)
        {
            for(let j=st2;j<st2+cols;j++)
            {
                narr[i][j]=arr[i-st1][j-st2];
            }
        }

        for (let i = (rows-200)*(cols-200); i < (nrow-200)*(ncol-200); i++) {
            var cfa = document.createElement('div');
            cfa.setAttribute('class', 'cell');
            cfa.setAttribute('id', i);
            document.getElementsByClassName("grid")[0].appendChild(cfa);
        }

        let grid = document.getElementsByClassName('cell');
        cells = Array.from(grid);
        for(let i=(rows-200)*(cols-200);i<(nrow-200)*(ncol-200);i++)
        {
            grid[i].addEventListener("click", () => clickHandler(grid[i]));
        }


        rows=nrow-200;
        cols=ncol-200;
        arr=narr;
        console.log(arr);


        for(let i=0;i<grid.length;i++)
        {
            grid[i].style.width=((screen.width-17)/cols + "px");
            grid[i].style.height=((screen.height-200)/rows + "px");
        }
                
        show(arr);
    }
}
