import { createContext, useReducer, useEffect, useState } from 'react';
import { getPuzzle, emptyNotes, checkBoard } from './components/functions.jsx';

const SudokuContext = createContext(null);
export const NotesContext = createContext(null);
export const CheckContext = createContext(null);

const boardReducer = (state, action) => {
    var newState, g, i, j, value;
    action.payload && ({g, i, j, value} = action.payload);
    switch(action.type) {
        case 'RESET_BOARD':
            return {
                history: [],
                board: getPuzzle(),
                future: [],
            };
        case 'SET_BOARD':
            return {
                history: [],
                board: action.payload,
                future: [],
            };
        case 'UPDATE_BOARD':
            newState = structuredClone(state.board);
            newState[g][i][j] = value;
            return {
                history: [...state.history, state.board],
                board: newState,
                future: [],
            };
        case 'UNDO':
            if (state.history.length === 0) return state;
            return {
                history: state.history.slice(0, -1),
                board: state.history[state.history.length - 1],
                future: [...state.future, state.board],
            };
        case 'REDO':
            if (state.future.length === 0) return state
            return {
                history: [...state.history, state.board],
                board: state.future[state.future.length - 1],
                future: state.future.slice(0, -1)
            };
        case 'UPDATE_NOTE':
            newState = structuredClone(state);
            newState[g][i][j][value-1] = !(state[g][i][j][value-1]);
            return newState;
        case 'RESET_NOTES':
            return emptyNotes();
        case 'SET_NOTES':
            return action.payload;
        case 'CHECK_BOARD':
            return checkBoard(action.payload);
    }
}

const newBoard = () => {
    return {
        history: [],
        board: getPuzzle(),
    };

}

export function CheckProvider({children}) {
    const [status, checkActions] = useReducer(boardReducer, null, newBoard);
    const [checking, setChecking] = useState(false);

    return (
        <CheckContext.Provider value={{status, checkActions,
                                        checking, setChecking}}>
            {children}
        </CheckContext.Provider>
    )
}

export function NotesProvier({children}) {
    const [notes, noteActions] = useReducer(boardReducer, null,emptyNotes);
    const [takingNotes, setTakingNotes] = useState(false);
    
    useEffect(() => {
        noteActions({type: 'SET_NOTES', payload: emptyNotes()});
    }, []);
    return (
        <NotesContext.Provider value={{notes, noteActions,
                                        takingNotes, setTakingNotes
                                        }}>
            {children}
        </NotesContext.Provider>
    )

}

export function SudokuProvider({children}) {
    const [board, boardActions] = useReducer(boardReducer, null,newBoard);
    const [selected, setSelected] = useState(null);
    const [puzzle, setPuzzle] = useState(() => getPuzzle());

    useEffect(() => {
        boardActions({type: 'SET_BOARD', payload: getPuzzle()});
    }, []);

    return (
        <SudokuContext.Provider value={{puzzle, setPuzzle ,
                                        selected, setSelected, 
                                        board, boardActions,
                                        }}>
            {children}
        </SudokuContext.Provider>
        )
}

export default SudokuContext;