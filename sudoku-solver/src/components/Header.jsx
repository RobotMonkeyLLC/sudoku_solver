import React from 'react';
import Guides from './Guides.jsx';
import { useContext } from 'react';
import SudokuContext from '../SudokuContext.jsx';

export default function Header() {
    const { takingNotes, setTakingNotes, noteActions,boardActions} = useContext(SudokuContext);

    const handleReset = () => {
        switch(takingNotes) {
            case true:
                noteActions({type: 'RESET_NOTES'});
                return;
            case false:
                boardActions({type: 'RESET_BOARD'});
                return;
        }
    }

    return (
        <header className="col-12">
            <div className="row justify-content-evenly">
                
                <div className="col-md-4 col-lg-12">
                    <h1 className='col-12'>Sudoku Solver</h1>
                    <Guides></Guides>
                </div>
                <div className='d-flex justify-content-between'>
                    <button className={`btn btn-h ${takingNotes ? 'btn-outline border-dark':'btn-secondary'} bi bi-pencil`}
                    onClick={() => setTakingNotes(!takingNotes)}></button>
                    
                    <div className='btn-group' role="group">
                        <button className={`btn btn-secondary bi bi-arrow-counterclockwise`}
                        onClick={() => boardActions({type: 'UNDO'})}></button>
                        <button className={`btn btn ${takingNotes ? 'btn-outline border-dark':'btn-secondary'} bi bi-arrow-repeat`}
                        onClick={()=> handleReset()}></button>
                        <button className={`btn btn-secondary bi bi-arrow-clockwise`}
                        onClick={() => boardActions({type: 'REDO'})}></button>
                    </div>
                </div>
                
            </div>
        </header>
    )
}