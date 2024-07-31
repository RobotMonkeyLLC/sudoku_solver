import { useContext } from "react";
import SudokuContext from '../SudokuContext.jsx';
import { toggleClass } from "./functions.jsx";

export default function Cell({value, coor}) {
    const { puzzle, selected, setSelected } = useContext(SudokuContext);
    const {g, i, j} = coor;

    const handleClick = (target) => {
        
        if (puzzle[g][i][j] !== 0) return;
        /* toggleClass('cell','bg-dark-subtle','bg-white');
        target.classList.replace('bg-white', 'bg-dark-subtle'); */
        setSelected({...coor});
    }
    const baseClass = 'cell d-flex justify-content-center border border-black align-items-center ';
    const valueClass = (puzzle[coor.g][coor.i][coor.j] === 0 ? 'cursor-pointer fs-2' : 'fs-1 text-dark-emphasis fw-bold');
    const isSelected = selected && selected.g === g && selected.i === i && selected.j === j;
    const selectedClass = isSelected ? 'bg-dark-subtle':'bg-white'
    
    return (
        <div className={baseClass+ valueClass + ' ' + selectedClass}
        onClick={(e) => handleClick(e.target)}>
            {value === 0 ? '' : value}
        </div>
    )
}