import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '../UI/colors';
import '../UI/global.css';

export const BoxCircle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
`;

export const Circle = styled.div(({width}) => css`
    width: ${width};
    margin: 0;
    padding: 0;
`);

export const CircleNoNumber = styled.div(({background}) => css`
    width: 9px;
    height: 9px;
    padding: 3px;
    border: ${background} solid 1px;
    border-radius: 100%;
    background: ${colors.white};
`);

export const CircleNumber = styled.div(({background}) => css`
    padding: 3px;
    box-sizing: border-box;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${background} solid 1px;
    border-radius: 100%;
    background: ${colors.white};
`);