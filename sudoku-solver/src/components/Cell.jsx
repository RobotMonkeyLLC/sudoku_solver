import { useContext } from "react";
import SudokuContext from '../SudokuContext.jsx';
import { toggleClass } from "./functions.jsx";

export default function Cell({value, coor}) {
    const {puzzle, selected, setSelected} = useContext(SudokuContext);
    
    const handleClick = (target) => {
        const {g, i, j} = coor;
        if (puzzle[g][i][j] !== 0) return;
        toggleClass(target);
        setSelected({...coor});

    }

    return (
        <div className="cell bg-secondary justify-content-center border border-black fs-3 align-content-center" 
        onClick={(e) => handleClick(e.target)}>
            {value === 0 ? '' : value}
        </div>
    )
}