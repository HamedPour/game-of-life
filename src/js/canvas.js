const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Global Vars

canvas.width = 600;
canvas.height = 600;

const ROWS = 60;
const COLS = 60;
const RES = 10;

// Grid setup
function createGrid() {
  // Thank Zeus for ES6
  return new Array(COLS)
    .fill(0)
    .map(() =>
      new Array(ROWS).fill(0).map(() => Math.round(Math.random() * 1))
    );
}

// Next generation grid
function nextGeneration(grid) {
  let nextGrid = grid.map((row) => [...row]);
  // loop through ever cell in the grid
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      // Each Cell
      let cell = grid[row][col];

      let neighbourhoodLivingTotal = 0;
      // loop through a 3 by 3 grid around each cell
      for (let x = -1; x < 2; x++) {
        for (let y = -1; y < 2; y++) {
          if (x === 0 && y === 0) {
            continue;
          }
          // check for out of bound
          const xCell = row + x;
          const yCell = col + y;

          if (xCell >= 0 && yCell >= 0 && xCell < ROWS && yCell < COLS) {
            let currentNeighbourhood = grid[row + x][col + y];
            neighbourhoodLivingTotal += currentNeighbourhood;
          }
        }
      }

      // underpopulation -> dead
      if (cell === 1 && neighbourhoodLivingTotal < 2) {
        nextGrid[row][col] = 0;
      } else if (cell === 1 && neighbourhoodLivingTotal > 3) {
        // overpopulation -> dead
        nextGrid[row][col] = 0;
      } else if ((cell === 0) & (neighbourhoodLivingTotal === 3)) {
        // production -> live
        nextGrid[row][col] = 1;
      }

      // visualise the grid
      ctx.beginPath();
      ctx.fillStyle = cell === 1 ? "green" : "white";
      ctx.strokeStyle = "#000";
      ctx.rect(col * RES, row * RES, RES, RES);
      ctx.fillRect(col * RES, row * RES, RES, RES);
      ctx.stroke();
    }
  }
  return nextGrid;
}

// Initialisation of first grid passed on into second
let nextGrid = nextGeneration(createGrid());

// Animation Loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Set Timeout function to slow animation down
  setTimeout(() => {
    requestAnimationFrame(animate);
  }, 70);
  nextGrid = nextGeneration(nextGrid);
}

animate();
