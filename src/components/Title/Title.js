import React from 'react'
import { H1, H2, Icons, TitleStyles } from './TtitleStyles';
import { IoSquareOutline } from "react-icons/io5";

const Title = ({name, icons, view}) => {
    return (
        <TitleStyles>
            <H1>{name}</H1>
            {
                icons &&    <Icons>
                                <IoSquareOutline className="darkIcon"/>
                                <IoSquareOutline className="lightIcon"/>
                            </Icons>
            }
            {
                view && <H2>view all</H2>
            }
        </TitleStyles>
    )
}

export default Title;
