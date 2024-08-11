import React, { useContext} from 'react';
import SudokuContext from '../SudokuContext.jsx';

export default function Guides() {
    const { notes, selected, board} = useContext(SudokuContext);

    const showRelations = () => {
        console.log('showing relations');
    };
    const check = () => {
        console.log('checking');
    };
    const showNotes = () => {
        console.log(notes);
    };
    const showBoard = () => {
        console.log(board);
    };

    return (
        <div className="btn-group " role="group" aria-label="Basic example">
            <button className="btn btn-secondary border"
            onClick={() => showRelations()}>
                Show relations</button>
            <button className="btn btn-secondary border"
            onClick={() => check()}>
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