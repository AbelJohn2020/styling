import React from 'react'
import { Icons } from '../Titles/TtitlesStyles';
import { colors } from '../UI/colors';
import { IoSquareOutline } from "react-icons/io5";
import { CircleRight, Header, Name, Profile } from './HeaderRightStyles';

const HeaderRight = ({name, background, width}) => {
    return (
        <Header>
            <Icons darkIcon={colors.ellipsis} lightIcon={colors.ellipsis} backgroundDarkIcon={colors.ellipsis} backgroundLightIcon={colors.ellipsis} margin="0 0 0 8px">
                <IoSquareOutline className="darkIcon" />
                <IoSquareOutline className="lightIcon" />
            </Icons>
            <Profile>
                <Name>{ name }</Name>
                <CircleRight background={background} width={width} margin="0 0 0 8px"></CircleRight>
            </Profile>
        </Header>
    )
}

export default HeaderRight;
