import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../UI/colors";
import '../UI/global.css';

export const Name = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    box-sizing: border-box;
    text-transform: capitalize;
    color: ${colors.darkIcon};
`;

export const CircleRight = styled.div(({background, width, margin}) => css`
    width: ${width};
    height: ${width};
    margin: ${margin};
    background: ${background};
    box-sizing: border-box;
    border-radius: 100%;
`);

export const Profile = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 24px 24px 24px 32px;
    border-bottom: ${colors.lightGray} solid 2px;
`;