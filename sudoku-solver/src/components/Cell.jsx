import { useContext } from "react";
import SudokuContext from '../SudokuContext.jsx';
import CellGroup from "./CellGroup.jsx";

export default function Cell({value, coor, shouldStop = false}) {
    const { takingNotes, notes, puzzle, selected, setSelected } = useContext(SudokuContext);
    const {g, i, j} = coor;

    const handleClick = () => {
        if (puzzle[g][i][j] !== 0) return;
        setSelected({...coor});
    }

    const baseClass = 'cell d-flex justify-content-center border border-black align-items-center ';
    const isPuzzle = puzzle[g][i][j] !== 0;
    //const puzzleClass = (puzzle[g][i][j] === 0 ? 'cursor-pointer fs-2' : 'fs-1 text-dark-emphasis fw-bold');
    const puzzleClass = isPuzzle ? 'fs-1 text-dark-emphasis fw-bold' : 'cursor-pointer fs-2';
    const isSelected = selected && selected.g === g && selected.i === i && selected.j === j;
    const selectedClass = isSelected ? 'bg-dark-subtle':'bg-white'
    

    return (
        <div className={baseClass + puzzleClass + ' ' + selectedClass}
        onClick={() => handleClick()}>
            {(isPuzzle && value) ||
            (takingNotes &&
            (shouldStop && <CellGroup group={notes[g][i][j]} g={g} shouldStop={true}></CellGroup>))||
            (value)}
        </div>
    )
}