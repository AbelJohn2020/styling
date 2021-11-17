import React from 'react';
import { Button } from '../HeaderCard/HeaderCardStyles';
import OcherSquare from '../OcherSquare/OcherSquare';
import { Title } from '../TitleCard/TitleCardStyles';
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { CardFile, EllipsisHorizontal, FileIcon, FileTitle } from './FilesStyles';

const Files = ({ radius, background, shadow, padding, capitalize, color, colorsTitle, title, members, date, paddingTitle }) => {
    return (
        <CardFile>
            <FileTitle>
                <OcherSquare radius={ radius } background={ background } shadow={ shadow } width="30px" height="26px"/>
                <Title padding={ paddingTitle } capitalize={ capitalize } color={ colorsTitle }>
                    { title }
                </Title>
            </FileTitle>
            <Title padding={ padding } capitalize={ false } color={ color }>
                { members }
            </Title>
            <FileIcon>
                <Title padding={ padding } capitalize={ capitalize } color={ color }>
                    { date }
                </Title>
                <EllipsisHorizontal>
                    <Button>
                        <IoEllipsisHorizontalSharp />
                    </Button>
                </EllipsisHorizontal>
            </FileIcon>
        </CardFile>
    )
}

export default Files;
