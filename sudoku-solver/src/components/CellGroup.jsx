import React, { memo } from "react";
import Cell from "../components/Cell.jsx";

function CellGroup({group, g, shouldStop = false}) {
    return (
        
            group.map((x, i) => (
                
                        x.length && x.map((y, j) => (
                            <Cell key={[g, i, j].join('-')} value={y} coor={{g:g, i:i, j:j, n:false}} shouldStop></Cell>
                        )) ||
                        <Cell key={[g.g, g.i, g.j, i].join('-')} value={i+1} coor={{g:g.g, i:g.i, j:g.j, n:true}} shouldStop={false}></Cell>
                        
                    
            ))
        
    )
}
export default memo(CellGroup);