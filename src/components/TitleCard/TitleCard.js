import React from 'react'
import { Date, Title } from './TitleCardStyles'

const TitleCard = ({ name, date, padding, capitalize, color }) => {
    return (
        <div>
            <Title padding={padding} capitalize={capitalize} color={color}>
                {name}
            </Title>
            <Date>
                created: {date}
            </Date>
        </div>
    )
}

export default TitleCard
