import React from 'react'
import { H1, H2, Icons, SubtitleStyles, TitleStyles } from './TtitlesStyles';
import { IoSquareOutline } from "react-icons/io5";
import { colors } from '../UI/colors';

export const Titles = ({name, icons, view}) => {
    return (
        <TitleStyles>
            <H1>{name}</H1>
            {
                icons &&    <Icons darkIcon={colors.darkIcon} lightIcon={colors.lightIcon} backgroundDarkIcon="transparent" backgroundLightIcon="transparent" margin="0 0 0 4px">
                                <IoSquareOutline className="darkIcon" />
                                <IoSquareOutline className="lightIcon" />
                            </Icons>
            }
            {
                view && <H2>view all</H2>
            }
        </TitleStyles>
    )
}

export const Subtitle = ({files, color, padding="0"}) => {
    return(
        <div>
            <SubtitleStyles color={color} padding={padding}>{files}</SubtitleStyles>
        </div>
    )
}
