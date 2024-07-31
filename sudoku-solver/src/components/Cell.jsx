import { useContext } from "react";
import SudokuContext from '../SudokuContext.jsx';
import { toggleClass } from "./functions.jsx";

export default function Cell({value, coor}) {
    const {selected, setSelected} = useContext(SudokuContext);
    
    const handleClick = (target, value) => {
        toggleClass(target);
        setSelected({g: coor.g, i: coor.i, j: coor.j, value: value});

    }

    return (
        <div className="cell bg-secondary justify-content-center border border-black fs-3 align-content-center" 
        onClick={(e) => handleClick(e.target, value)}>
            {value === 0 ? '' : value}
        </div>
    )
}