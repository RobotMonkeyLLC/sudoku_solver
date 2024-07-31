import CellGroup from "../components/CellGroup.jsx";

export default function Board({board}) {
    return (
        
        <div id='board' className="bg-warning p-md-1 p-lg-2 row d-flex flex-wrap justify-content-center col-md-12 col-lg-8">
            {
                board.map((group, g) => (
                    <div key={g} className="col-4 d-flex flex-wrap justify-content-center px-0 my-1">
                        <CellGroup group={group} g={g}></CellGroup>
                    </div>
                ))
            }
            
        </div>
    )
}