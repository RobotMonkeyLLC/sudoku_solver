import { memo,useContext } from "react";
import SudokuContext, { NotesContext, CheckContext } from '../SudokuContext.jsx';
import CellGroup from "./CellGroup.jsx";

const useSelected = () => {
        const { selected } = useContext(SudokuContext);
        return selected;
    };
    
const usePuzzleCell = (g, i, j) => {
    const { puzzle } = useContext(SudokuContext);
    return puzzle[g][i][j];
};

function Cell({value, coor, shouldStop = false}) {
    const { setSelected } = useContext(SudokuContext);
    const { takingNotes, notes } = useContext(NotesContext);
    const { checking, status } = useContext(CheckContext);

    const selected = useSelected();
    const puzzle = usePuzzleCell(coor.g, coor.i, coor.j);
    const {g, i, j, n} = coor;
    
    const handleClick = () => {
        if (puzzle !== 0) return;
        if (JSON.stringify(selected) === JSON.stringify(coor)) {
            setSelected(null);
            return;
        }
        setSelected({...coor});
    }
    
    const isPuzzle = !n && (puzzle !== 0); // needs rework
    const isNoteTrue = takingNotes && notes[g][i][j][value-1];
    const isSelected = selected && selected.g === g && selected.i === i && selected.j === j;
    const baseClass = `${n ? ' note-cell ' : 'cell '} d-flex flex-wrap p-0 border border-black align-content-center justify-content-center`;
    const puzzleClass = isPuzzle ? ' fs-1 text-dark-emphasis fw-bold ' : ` cursor-pointer ${n ? null : 'fs-2'} `;
    const selectedClass = isSelected ? ` bg-${isNoteTrue ? "dark" : "dark-subtle"} ${n && "bg-"}opacity-${n ? 50 : 25} `:` bg-white bg-opacity-${50} `;

    return (
        <div className={baseClass + puzzleClass + ' ' + selectedClass}
        onClick={() => handleClick()}>
            {(isPuzzle && value) ||
            (takingNotes &&
            (shouldStop && <CellGroup group={notes[g][i][j]} g={{g:g, i:i, j:j}} shouldStop={true}></CellGroup>))||
            (value == 0 ? '' : value)}
        </div>
    )
}

export default memo(Cell);