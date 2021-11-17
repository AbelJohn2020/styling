import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '../UI/colors';
import '../UI/global.css';

export const Title = styled.h1(({ padding, capitalize, color }) => css`
    padding: ${padding};
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: ${color};
    text-transform: ${ capitalize === true && 'capitalize' };
    box-sizing: border-box;
`);

export const Date = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 9px;
    letter-spacing: 0.05em;
    color: ${colors.navbarColor};
    text-transform: capitalize;
    box-sizing: border-box;
`;