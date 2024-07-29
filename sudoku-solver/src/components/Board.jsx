import CellGroup from "../components/CellGroup.jsx";

export default function Board() {
    return (
        
        <div className="bg-warning py-1 row d-flex flex-wrap justify-content-center col-md-12 col-lg-8">
            {
                [...Array(9+2)].map((_, i) => (
                    i === 3 || i === 7 ? 
                    <div key={i == 3 ?  9 : (i == 7) ? 10 : i} className="col-12 border-warning border-3 border-top"></div>
                    :
                    <div key={i == 9 ?  3 : (i == 10) ? 7 : i} className="col-4 d-flex flex-wrap justify-content-center px-0">
                        <CellGroup group={i}></CellGroup>
                    </div>
                ))
                
            }
            
        </div>
    )
}