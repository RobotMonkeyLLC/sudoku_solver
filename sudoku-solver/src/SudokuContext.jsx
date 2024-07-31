import { createContext, useReducer, useEffect, useState } from 'react';
import { getPuzzle } from './components/functions.jsx';

const SudokuContext = createContext(null);

const TaskReducer = (state, action) => {
    let newState, g, i, j, value;
    switch(action.type) {
        case 'SET_BOARD':
            return action.payload;
        case 'UPDATE_BOARD':
            ({g, i, j, value} = action.payload);
            newState = [...state];
            newState[g][i][j] = value;
            return newState;
    }
}

const puzzle = getPuzzle();

export function SudokuProvider({children}) {
    const [board, boardActions] = useReducer(TaskReducer, Array(9).fill(Array(3).fill(Array(3).fill(0))));
    const [selected, setSelected] = useState({g: 0, i: 0, j: 0});

    useEffect(() => {
        boardActions({type: 'SET_BOARD', payload: puzzle});
    }, []);

    return (
        <SudokuContext.Provider value={{selected, setSelected, board, boardActions}}>
            {children}
        </SudokuContext.Provider>    )
}

export default SudokuContext;