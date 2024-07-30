import { useContext } from "react";
import SudokuContext from '../SudokuContext.jsx';

export default function Cell({group, i, j}) {
    const {board, boardActions} = useContext(SudokuContext);
    //let value = board[ind.g][ind.i][ind.j];

    return (
        <div className="cell bg-secondary justify-content-center border border-black" 
        onClick={() => console.log(board[group][i][j])}>
            {board != undefined ? board[group][i][j] : 0}
        </div>
    )
}