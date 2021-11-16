import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '../UI/colors';
import '../UI/global.css';

export const CardStyles = styled.div`
    background: ${colors.white};
    width: 160px;
    height: 136px;
    padding: 16px 14px;
    border-radius: 12px;
`;

export const Square = styled.div(({radius, background, shadow}) => css`
    width: 30px;
    height: 26px;
    background: ${background};
    border-radius: ${radius};
    box-shadow: ${shadow}
`);