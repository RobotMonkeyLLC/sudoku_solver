export default function Tiles() {
    return (
        <div className="tiles col-12 row justify-content-center py-2">
            {
                [...Array(9)].map((_, i) => (
                    
                        <div key={i} className="tile col-1 bg-primary border border-black">
                            {i + 1}
                        </div>
                    
                ))
            }
        </div>
    )
}