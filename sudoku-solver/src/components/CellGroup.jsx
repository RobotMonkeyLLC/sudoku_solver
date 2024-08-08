import Cell from "../components/Cell.jsx";

export default function CellGroup({group, g, shouldStop = false}) {
    return (
        
            group.map((x, i) => (
                
                        x.length && x.map((y, j) => (
                            <Cell key={j} value={y} coor={{g:g, i:i, j:j, n:false}} shouldStop></Cell>
                        )) ||
                        <Cell key={i+'2'} value={i} coor={{g:g.g, i:g.i, j:i, n:true}} shouldStop={false}></Cell>
                        
                    
            ))
        
    )
}