import React from 'react'
import { Square } from '../Card/CardStyles';

const OcherSquare = ({radius, background, shadow, width, height }) => {
    return (
        <div>
            <Square radius={radius} background={background} shadow={shadow} width={width} height={height}/>
        </div>
    )
}

export default OcherSquare;
