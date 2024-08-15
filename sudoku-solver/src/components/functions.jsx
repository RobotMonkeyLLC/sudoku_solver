const checkRow = (grid, row, num) => {

}

const checkCol = (grid, col, num) => {

}

const checkSquare = (grid, row, col, num) => {

}

const isValid = (grid, row, col, num) => {

}


const getPuzzle = () => {
    const newboard = {
        "grids": [
            [[0,0,0],[0,0,7],[0,0,0]],
            [[5,0,1],[6,4,0],[0,0,0]],
            [[0,7,0],[0,0,0],[0,4,9]],
            [[1,0,0],[7,4,5],[0,0,0]],
            [[7,0,0],[0,1,0],[0,9,0]],
            [[0,8,0],[0,0,0],[1,0,0]],
            [[3,0,0],[4,2,0],[5,0,1]],
            [[9,0,0],[0,8,5],[0,7,4]],
            [[0,0,0],[0,0,0],[0,0,8]]
        ]
    };
    return(newboard.grids);
}

const emptyNotes = () => {
    return new Array(9).fill()
        .map(() => (Array(3).fill()
            .map(() => (Array(3).fill()
                .map(() => (Array(9).fill()
                    .map(() => (false))))))))

}

const toggleClass = (cls, remove, add) => {
    [...document.getElementsByClassName(cls)].map((cell) => {
        cell.classList.replace(remove, add);
    });
}
export { getPuzzle, toggleClass, emptyNotes };