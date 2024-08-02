import { createContext, useReducer, useEffect, useState } from 'react';
import { getPuzzle, emptyNotes } from './components/functions.jsx';

const SudokuContext = createContext(null);

const boardReducer = (state, action) => {
    let newState, g, i, j, value;
    action.payload && ({g, i, j, value} = action.payload);
    switch(action.type) {
        case 'RESET_BOARD':
            return getPuzzle();
        case 'SET_BOARD':
            return action.payload;
        case 'UPDATE_BOARD':
            newState = structuredClone(state);
            newState[g][i][j] = value;
            return newState;
        case 'UPDATE_NOTE':
            newState = structuredClone(state);
            newState[g][i][j][value-1] = true//!(newState[g][i][j][value-1]);
            return newState;
    }
}


export function SudokuProvider({children}) {
    const [board, boardActions] = useReducer(boardReducer, getPuzzle());
    const [notes, noteActions] = useReducer(boardReducer, emptyNotes());
    const [selected, setSelected] = useState(null);
    const [takingNotes, setTakingNotes] = useState(false);
    const [puzzle, setPuzzle] = useState(getPuzzle());

    useEffect(() => {
        boardActions({type: 'SET_BOARD', payload: getPuzzle()});
        noteActions({type: 'SET_BOARD', payload: emptyNotes()});
    }, []);

    return (
        <SudokuContext.Provider value={{puzzle, setPuzzle ,
                                        selected, setSelected, 
                                        board, boardActions,
                                        notes, noteActions,
                                        takingNotes, setTakingNotes}}>
            {children}
        </SudokuContext.Provider>
        )
}

export default SudokuContext;