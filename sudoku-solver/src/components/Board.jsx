import CellGroup from "../components/CellGroup.jsx";
import { useContext } from "react";
import SudokuContext from "../SudokuContext.jsx";

export default function Board() {
    const {board} = useContext(SudokuContext);

    return (
        
        <div id='board' className="bg-light p-md-1 p-lg-2 row d-flex flex-wrap justify-content-center col-md-12 col-lg-8">
            {
                board.map((group, g) => (
                    <div key={g} className="col-4 d-flex flex-wrap justify-content-center px-0 my-1">
                        <CellGroup group={group} g={g} shouldStop={false}></CellGroup>
                    </div>
                ))
            }
            
        </div>
    )
}