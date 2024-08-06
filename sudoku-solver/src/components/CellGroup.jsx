import Cell from "../components/Cell.jsx";

export default function CellGroup({group, g, shouldStop = false}) {
    return (
        
            group.map((x, i) => (
                
                        x.length && x.map((y, j) => (
                            <Cell key={j} value={y} coor={{g:g, i:i, j:j}} shouldStop></Cell>
                        )) ||
                        <Cell key={i+'2'} value={x} coor={{g:g, i:i, j:false}} shouldStop={false}></Cell>
                        
                    
            ))
        
    )
}