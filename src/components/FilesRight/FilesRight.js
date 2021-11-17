import React from 'react'
import OcherSquare from '../OcherSquare/OcherSquare';
import { Title } from '../TitleCard/TitleCardStyles';
import { Subtitle } from '../Titles/Titles';
import { colors } from '../UI/colors';
import { FilesRightStyles, Information, Storage, TypeInformation } from './FilesRightStyles';

const FilesRight = ({background, paddingTitle, title, files, storage, colorSubtitle}) => {
    return (
        <FilesRightStyles>
            <TypeInformation>
                <OcherSquare radius="8px" background={ background } shadow={ false } width="30px" height="30px"/> 
                <Information>
                    <Title padding={ paddingTitle } capitalize={ true } color={ colors.darkIcon }>
                        {title}
                    </Title>
                    <Subtitle files={files} color={colorSubtitle} />
                </Information>
            </TypeInformation>
            <Storage>{storage}</Storage>
        </FilesRightStyles>
    )
}

export default FilesRight;
