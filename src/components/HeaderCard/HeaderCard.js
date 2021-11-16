import React from 'react'
import Circles from '../Circles/Circles';
import OcherSquare from '../OcherSquare/OcherSquare';
import { colors } from '../UI/colors';
import { IoEllipsisVertical } from "react-icons/io5";
import { Button, Ellipsis, Headers } from './HeaderCardStyles';

const HeaderCard = ({circles}) => {
    return (
        <Headers>
            <OcherSquare radius="0" background={colors.createNewBackround} shadow={`-5px 5px 0 0 ${colors.shadowSquare}`}/>
            <Circles circles={circles} />
            <Ellipsis>
                <Button>
                    <IoEllipsisVertical className='icon'/>
                </Button>
            </Ellipsis>
        </Headers>
    )
}

export default HeaderCard;
