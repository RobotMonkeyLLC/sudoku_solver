import React, { useContext } from 'react';
import SudokuContext, { NotesContext } from '../SudokuContext.jsx';

const useSelected = () => {
    const { selected } = useContext(SudokuContext);
    return selected;
};

export default function Tiles() {
    const { setSelected, boardActions } = useContext(SudokuContext);
    const { notes, takingNotes, setTakingNotes, noteActions } = useContext(NotesContext);
    const selected = useSelected();
    const handleClick = (num) => {
        if (selected === null) return;
        switch(takingNotes) {
            case true:
                noteActions({type: 'UPDATE_NOTE', payload: {g:selected.g, i: selected.i, j: selected.j, value: num}});
                return;
            case false:
                boardActions({type: 'UPDATE_BOARD', payload: {g:selected.g, i: selected.i, j: selected.j, value: num}});
                setSelected(null);
                return;
        }
    }

    const isNote = (i) => (takingNotes && (selected !== null))
                        ? "btn-" + (notes[selected.g][selected.i][selected.j][i] ? 'dark' : 'outline') 
                        : 'btn-primary';
    return (
        <div className="col-md-9 btn-group tiles row justify-content-center py-2" role='group'>
            {
                [...Array(9)].map((_, i) => (
                    
                        <button key={i} className={`col-1 btn ${isNote(i)} border fs-3`}
                            onClick={() => handleClick(i+1)}>
                            {i + 1}
                        </button>
                    
                ))
            }
        </div>
    )
}