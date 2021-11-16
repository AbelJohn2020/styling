import React from 'react'
import { Date, Title } from './TitleCardStyles'

const TitleCard = ({ name, date, padding, capitalize }) => {
    return (
        <div>
            <Title padding={padding} capitalize={capitalize}>
                {name}
            </Title>
            <Date>
                created: {date}
            </Date>
        </div>
    )
}

export default TitleCard
