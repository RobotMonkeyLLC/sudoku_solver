import React from 'react';
import Guides from './Guides.jsx';

export default function Header({ boardActions, puzzle }) {
    return (
        <header className="col-12">
            <div className="row justify-content-evenly">
                <button className="btn btn-h btn-secondary bi bi-arrow-repeat"
                onClick={()=> boardActions({type:'RESET_BOARD'})}></button>
                <div className="col-4">
                    <h1 className='col-12'>Sudoku Solver</h1>
                    <Guides></Guides>
                </div>
                
                <button className="btn btn-h btn-secondary bi bi-pencil"></button>
            </div>
        </header>
    )
}