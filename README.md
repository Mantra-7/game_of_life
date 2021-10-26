# game_of_life

This is a website in which you can play with Conway's Game of Life.

Wikipedia article on Game of Life: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life 

## Brief info about Game of Life:

Conway's Game of Life is a simple cellular automaton which was devised by the British mathematician John Horton Conway in 1970. 

### Setup of game:

There is a grid of cells and each cell can be alive(black) or dead(white). You give it some intial state and then it will evolve on its own!

### Rules:

In each iteration, you will count number of neighbour cells which are alive and according to that decide state of this cell in next iteration.

Every cell has eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent.

1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.


Link to webpage: https://mantra-7.github.io/game_of_life/