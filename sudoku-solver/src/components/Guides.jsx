import React, { useContext} from 'react';
import SudokuContext, { NotesContext, CheckContext } from '../SudokuContext.jsx';

export default function Guides() {
    const { selected, board} = useContext(SudokuContext);
    const { notes } = useContext(NotesContext);
    const { check, checking ,setChecking, checkActions } = useContext(CheckContext);

    const showRelations = () => {
        console.log('showing relations');
    };
    const showCheck = () => {
        checkActions({type: 'CHECK_BOARD', payload: board.board});
        setChecking(checking ? false : true);
        console.log('checking', check);
    };
    const showNotes = () => {
        console.log(notes);
    };
    const showBoard = () => {
        console.log(board.board);
    };

    return (
        <div className="btn-group " role="group" aria-label="Basic example">
            <button className="btn btn-secondary border"
            onClick={() => showRelations()}>
                Show relations</button>
            <button className="btn btn-secondary border"
            onClick={() => showCheck()}>
                Check</button>
            <button className="btn btn-secondary border"
            onClick={() => showNotes()}>
                Notes</button>
            <button className="btn btn-secondary border"
            onClick={() => showBoard()}>
                Board</button >
        </div>
    )
}