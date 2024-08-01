import React, { useContext } from 'react';
import SudokuContext from '../SudokuContext.jsx';

export default function Tiles() {
    const { selected, setSelected, boardActions } = useContext(SudokuContext);

    const handleClick = (num) => {
        if (selected === null) return;
        boardActions({type: 'UPDATE_BOARD', payload: {g:selected.g, i: selected.i, j: selected.j, value: num}});
        setSelected(null);
    }
    
    return (
        <div className="col-9 btn-group tiles row justify-content-center py-2" role='group'>
            {
                [...Array(9)].map((_, i) => (
                    
                        <button key={i} className="col-1 btn btn-primary border fs-3"
                            onClick={() => handleClick(i+1)}>
                            {i + 1}
                        </button>
                    
                ))
            }
        </div>
    )
}