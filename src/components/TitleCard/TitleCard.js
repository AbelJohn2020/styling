import React from 'react'
import { Date, Title } from './TitleCardStyles'

const TitleCard = ({ name, date }) => {
    return (
        <div>
            <Title>
                {name}
            </Title>
            <Date>
                created: {date}
            </Date>
        </div>
    )
}

export default TitleCard
