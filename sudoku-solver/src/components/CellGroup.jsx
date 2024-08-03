import Cell from "../components/Cell.jsx";

export default function CellGroup({group, g, shouldStop = false}) {
    return (
        
            group.map((x, i) => (
                <div key={i} className="row justify-content-center">
                    {
                        x && x.map((y, j) => (
                            <Cell key={j} value={y} coor={{g:g, i:i, j:j}} shouldStop></Cell>
                        )) ||
                        <Cell key={i+'2'} value={x} coor={{g:g, i:i, j:i}} shouldStop={false}></Cell>
                        
                    }
                </div>
            ))
        
    )
}