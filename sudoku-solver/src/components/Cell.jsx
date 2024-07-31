import { useContext, useEffect, useState } from "react";
import SudokuContext from '../SudokuContext.jsx';

export default function Cell({value}) {
    const {board, boardActions} = useContext(SudokuContext);
    
    const handleClick = (target) => {
        console.log(target);
    }

    return (
        <div className="cell bg-secondary justify-content-center border border-black" 
        onClick={(e) => handleClick(e.target)}>
            {value === 0 ? '' : value}
        </div>
    )
}