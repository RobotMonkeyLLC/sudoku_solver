import Cell from "../components/Cell.jsx";

export default function CellGroup({group}) {
    return (
        
            group.map((_, i) => (
                <div key={i} className="row justify-content-center">
                    {
                        _.map((_, j) => (
                            <Cell key={j} value={_}></Cell>
                        ))
                    }
                </div>
            ))
        
    )
}