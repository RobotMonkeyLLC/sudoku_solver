const getPuzzle = () => {
    /* const response = await fetch('');
    const data = await response.json();
    return data.newboard.grids; */
    return([[[0,0,0],[0,0,7],[0,0,0]],
            [[5,0,1],[6,4,0],[0,0,0]],
            [[0,7,0],[0,0,0],[0,4,9]],
            [[1,0,0],[7,4,5],[0,0,0]],
            [[7,0,0],[0,1,0],[0,9,0]],
            [[0,8,0],[0,0,0],[1,0,0]],
            [[3,0,0],[4,2,0],[5,0,1]],
            [[9,0,0],[0,8,5],[0,7,4]],
            [[0,0,0],[0,0,0],[0,0,8]]]);
}

const toggleClass = (target, add = 'bg-primary', sub = 'bg-secondary') => {
    [...document.getElementsByClassName('cell')].map((cell) => {
        cell.classList.remove(add);
        cell.classList.add(sub);
    });
    target.classList.toggle(sub);
    target.classList.toggle(add);
    console.log(target);
}
export { getPuzzle, toggleClass }