import { createContext, useReducer, useEffect, useState } from 'react';
import { getPuzzle, emptyNotes } from './components/functions.jsx';

const SudokuContext = createContext(null);

const boardReducer = (state, action) => {
    let newState, g, i, j, value;
    switch(action.type) {
        case 'RESET_BOARD':
            return getPuzzle();
        case 'SET_BOARD':
            return action.payload;
        case 'UPDATE_BOARD':
            ({g, i, j, value} = action.payload);
            newState = [...state];
            newState[g][i][j] = value;
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