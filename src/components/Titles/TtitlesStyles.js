import { css } from '@emotion/react';
import styled from '@emotion/styled';
import '../UI/global.css';

export const TitleStyles = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const H1 = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
`;

export const H2 = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-transform: capitalize;
`;

export const Icons = styled.div(({darkIcon, lightIcon, backgroundDarkIcon, backgroundLightIcon, margin }) => css`
    display: flex;
    .darkIcon,
    .lightIcon {
        font-size: 16px;
    }

    .darkIcon {
        color: ${darkIcon};
        background: ${backgroundDarkIcon};
    }

    .lightIcon {
        color: ${lightIcon};
        background: ${backgroundLightIcon};
        margin: ${margin};
    }
`);

export const SubtitleStyles =  styled.h2(({color, padding}) => css`
    color: ${color};
    padding: ${padding};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 9px;
`);