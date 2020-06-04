### Conway's Game of Life

One of Mr OMGTechy's Little Challenges.

see [The Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

[See Conway's Game of Life in action](https://hamedpour.github.io/game-of-life/)

## Challenge Breakdown

1. Create a grid
2. Show grid using canvas
3. Randomise grid cells to either zero or one.
4. Show green for living cells (one) and empty for dead cells (zero).
5. Somehow identify the 8 neighbouring cells around each cell (this was challenging to figure out at first).
6. Resolve out-of-bound neighbour cells (Also a difficult one).
7. Give a total score of living based on the neighbourhood of each cell.
8. Apply the rules of life to each cell factoring its total neighbourhood score.
9. Figure out how to setup generation changes for each cell.
   (I used requestAnimationFrame)

#Optional

1. Setup a start button
2. Setup a reset button
3. Setup a randomise cell button
