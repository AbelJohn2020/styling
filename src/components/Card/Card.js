import React from 'react';
import HeaderCard from '../HeaderCard/HeaderCard';
import TitleCard from '../TitleCard/TitleCard';
import { CardStyles } from './CardStyles';

const Card = ({ capitalize, numbers, circles, firstC, secondC, thirdC, background, shadow, radius, icon, name, date, padding }) => {
    return (
        <CardStyles>
            <HeaderCard 
                numbers={numbers}
                circles={circles}
                firstC={ firstC }
                secondC={ secondC }
                thirdC={ thirdC }
                background={ background }
                shadow={ shadow }
                radius= {radius }
                icon={ icon }
            />
            <TitleCard name={name} date={date} padding={padding} capitalize={capitalize} />
        </CardStyles>
    )
}

export default Card;
