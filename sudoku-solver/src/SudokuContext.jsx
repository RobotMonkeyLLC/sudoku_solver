import { createContext, useReducer, useEffect, useState } from 'react';
import { getPuzzle } from './components/functions.jsx';

const SudokuContext = createContext(null);

const TaskReducer = (state, action) => {
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

const choosePuzzle = getPuzzle().slice();

export function SudokuProvider({children}) {
    const [board, boardActions] = useReducer(TaskReducer, getPuzzle());
    const [selected, setSelected] = useState(null);
    const [puzzle, setPuzzle] = useState(getPuzzle());

    useEffect(() => {
        boardActions({type: 'SET_BOARD', payload: choosePuzzle});
    }, []);

    return (
        <SudokuContext.Provider value={{puzzle, setPuzzle ,selected, setSelected, board, boardActions}}>
            {children}
        </SudokuContext.Provider>
        )
}

export default SudokuContext;