import React, { useState, useEffect } from 'react'

export const useCoords = (coords) => {

    const [state, setState] = useState(coords)

    useEffect(() => {
        const mouseMove = (e) => {
            const coor = {x:e.x, y:e.y};
            setState(coor);
        }

        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove);            
        }
    }, [])

    return { state }
    
}
