import Cell from "../components/Cell.jsx";

export default function CellGroup({group}) {
    return (
        
            [...Array(3)].map((_, i) => (
                <div key={i} className="row justify-content-center">
                    {
                        [...Array(3)].map((_, j) => (
                            <Cell key={j} group={group} i={i} j={j}></Cell>
                        ))
                    }
                </div>
            ))
        
    )
}