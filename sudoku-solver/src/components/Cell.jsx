import { useContext } from "react";
import SudokuContext from '../SudokuContext.jsx';
import CellGroup from "./CellGroup.jsx";

export default function Cell({value, coor, shouldStop = false}) {
    const { takingNotes, notes, puzzle, selected, setSelected } = useContext(SudokuContext);
    const {g, i, j} = coor;

    const handleClick = () => {
      /*   if (takingNotes) {
            //setSelected({...coor});
            return;
        } */
        if (puzzle[g][i] && puzzle[g][i][j] !== 0) return;
        setSelected({...coor});
    }
    
    const isNoteTrue = notes[g][i][j][value];
    const isPuzzle = (j !== false) && (puzzle[g][i][j] !== 0); // needs rework
    const isSelected = selected && selected.g === g && selected.i === i && selected.j === j;
    const isNote = (isPuzzle == false) && (takingNotes);
    //const puzzleClass = (puzzle[g][i][j] === 0 ? 'cursor-pointer fs-2' : 'fs-1 text-dark-emphasis fw-bold');
    const noteClass = isNote ? ' note-cell ' : false;
    const baseClass = `${noteClass || 'cell '} d-flex flex-wrap p-0 border border-black align-content-center justify-content-center`;
    const puzzleClass = isPuzzle ? ' fs-1 text-dark-emphasis fw-bold ' : ` cursor-pointer ${isNote ? '' : 'fs-2'} `;
    const selectedClass = isSelected ? ` bg-${isNoteTrue ? "dark" : "white"} opacity-${isNote ? 50 : 25} `:` bg-white bg-opacity-${50} `;

    return (
        <div className={baseClass + puzzleClass + ' ' + selectedClass}
        onClick={() => handleClick()}>
            {(isPuzzle && value) ||
            (takingNotes &&
            (shouldStop && <CellGroup group={notes[g][i][j]} g={{g:g, i:i}} shouldStop={true}></CellGroup>))||
            (value == 0 ? '' : value)}
        </div>
    )
}