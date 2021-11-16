import React from 'react';
import HeaderCard from '../HeaderCard/HeaderCard';
import TitleCard from '../TitleCard/TitleCard';
import { CardStyles } from './CardStyles';

const Card = ({circles, name, date}) => {
    return (
        <CardStyles>
            <HeaderCard circles={circles} />
            <TitleCard name={name} date={date} />
        </CardStyles>
    )
}

export default Card;
