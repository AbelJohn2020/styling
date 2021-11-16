import React from 'react'
import { Square } from '../Card/CardStyles';

const OcherSquare = ({radius, background, shadow}) => {
    return (
        <div>
            <Square radius={radius} background={background} shadow={shadow}/>
        </div>
    )
}

export default OcherSquare;
