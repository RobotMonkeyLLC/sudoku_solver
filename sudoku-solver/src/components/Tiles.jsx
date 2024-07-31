export default function Tiles({boardActions, selected}) {
    const handleClick = (num) => {
        boardActions({type: 'UPDATE_BOARD', payload: {g:selected.g, i: selected.i, j: selected.j, value: num}});
    }
    return (
        <div className="tiles col-12 row justify-content-center py-2">
            {
                [...Array(9)].map((_, i) => (
                    
                        <div key={i} className="tile col-1 bg-primary border"
                            onClick={() => handleClick(i+1)}>
                            {i + 1}
                        </div>
                    
                ))
            }
        </div>
    )
}