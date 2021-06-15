window.addEventListener("load", () => {
    init();
});

function init() {

    const titleText = document.getElementById("title");
    const grid = document.getElementById("full-grid");

    titleText.innerHTML = "Sudoku";
    grid.innerHTML = buildGrid();

}

function buildGrid() {
    let allSquares = '';
    let currentMajorRow, currentSquare, currentMinorRow;
    let sq, row, col;
    let id;
    for (let i=0; i < 3; i++) {
        // console.log("starting major row " + (i + 1));
        currentMajorRow = `<div class="grid-row">`;
        for (let j=0; j < 3; j++) {
            sq = 3*i + j + 1;
            // console.log("currently building square " + sq);
            currentSquare = `
                <div class="nine-square" id="square${sq}">
            `;
            for (let m=0; m < 3; m++) {
                row = 3*i + m + 1;
                // console.log("starting minor row " + row);
                currentMinorRow = `<div class="square-row">`;
                for (let n=0; n < 3; n++) {
                    col = 3*j + n + 1;
                    id = `sq${sq}-r${row}-c${col}`;
                    // TODO: add transparent input field and toggle? or just use input field?
                    currentMinorRow += `
                        <div class="single-square square${sq} row${row} col${col}" id="${id}">
                            <input type="text" id="input-${id}" />
                        </div>
                    `;
                }
                currentMinorRow += `</div>`;
                currentSquare += currentMinorRow;
            }
            currentSquare += `</div>`;
            currentMajorRow += currentSquare;
        }
        currentMajorRow += `</div>`;
        allSquares += currentMajorRow;
    }
    return allSquares;
}


/*
        1 2 3   4 5 6   7 8 9

   1    1 2 3   1 2 3   1 2 3
   2    4 5 6   4 5 6   4 5 6
   3    7 8 9   7 8 9   7 8 9
  
   4    1 2 3   1 2 3   1 2 3
   5    4 5 6   4 5 6   4 5 6
   6    7 8 9   7 8 9   7 8 9

   7    1 2 3   1 2 3   1 2 3
   8    4 5 6   4 5 6   4 5 6
   9    7 8 9   7 8 9   7 8 9

    Structurally

    3 MAJOR ROWS OF 3 9-squares
    Within each 0 square, 3 rows of squares

*/


