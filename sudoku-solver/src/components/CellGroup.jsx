import Cell from "../components/Cell.jsx";

export default function CellGroup({group, g, shouldStop}) {
    return (
        
            group.map((x, i) => (
                <div key={i} className="row justify-content-center">
                    {
                        x.map((y, j) => (
                            <Cell key={j} value={y} coor={{g:g, i:i, j:j}}></Cell>
                        ))
                    }
                </div>
            ))
        
    )
}