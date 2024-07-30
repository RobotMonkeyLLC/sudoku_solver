import { createContext, useReducer, useEffect } from 'react';
import { getPuzzle } from './components/functions.jsx';

const SudokuContext = createContext(null);

const TaskReducer = (state, action) => {
    switch(action.type) {
        case 'SET_BOARD':
            return action.payload;
        case 'UPDATE_BOARD':
            return state.map((row, i) => {
                if(i === action.payload.i) {
                    return row.map((cell, j) => {
                        if(j === action.payload.j) {
                            return action.payload.value;
                        }
                        return cell;
                    });
                }
                return row;
            });
    }
}

const puzzle = getPuzzle();

export function SudokuProvider({children}) {
    const [board, boardActions] = useReducer(TaskReducer, []);

    useEffect(() => {
        boardActions({type: 'SET_BOARD', payload: puzzle});
    }, []);

    return (
        <SudokuContext.Provider value={{ board, boardActions}}>
            {children}
        </SudokuContext.Provider>    )
}

export default SudokuContext;