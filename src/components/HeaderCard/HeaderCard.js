import React from 'react'
import Circles from '../Circles/Circles';
import OcherSquare from '../OcherSquare/OcherSquare';
import { IoEllipsisVertical } from "react-icons/io5";
import { Button, Ellipsis, Headers } from './HeaderCardStyles';

const HeaderCard = ({ numbers, circles, firstC, secondC, thirdC, shadow, background, radius, icon }) => {
    return (
        <Headers>
            <OcherSquare radius={radius} background={background} shadow={shadow} width="30px" height="26px"/>
            <Circles numbers={numbers} circles={circles} firstC={firstC} secondC={secondC} thirdC={thirdC}/>
            <Ellipsis>
                {
                    icon === true &&    <Button>
                                            <IoEllipsisVertical className='icon'/>
                                        </Button>
                }
            </Ellipsis>
        </Headers>
    )
}

export default HeaderCard;
