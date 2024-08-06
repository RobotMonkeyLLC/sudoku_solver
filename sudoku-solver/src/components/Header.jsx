import React from 'react';
import Guides from './Guides.jsx';
import { useContext } from 'react';
import SudokuContext from '../SudokuContext.jsx';

export default function Header() {
    const { takingNotes, setTakingNotes, boardActions} = useContext(SudokuContext);

    return (
        <header className="col-12">
            <div className="row justify-content-evenly">
                
                <div className="col-md-4 col-lg-12">
                    <h1 className='col-12'>Sudoku Solver</h1>
                    <Guides></Guides>
                </div>
                
                <button className={`btn btn-h ${takingNotes ? 'btn-outline border-dark':'btn-secondary'} bi bi-pencil`}
                onClick={() => setTakingNotes(!takingNotes)}></button>
                <button className="btn btn-h btn-secondary bi bi-arrow-repeat"
                onClick={()=> boardActions({type:'RESET_BOARD'})}></button>
            </div>
        </header>
    )
}