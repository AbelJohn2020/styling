import React from 'react';
import { IoSquareOutline } from "react-icons/io5";
import { ExtraOpion } from './ExtrasNavbarStyles';

const ExtrasNavbar = ({name}) => {
    return (
        <ExtraOpion>
            <div className='icon'>
                <IoSquareOutline/>
            </div>
            <div className='name'>
                {name}
            </div>
        </ExtraOpion>
    )
}

export default ExtrasNavbar;
