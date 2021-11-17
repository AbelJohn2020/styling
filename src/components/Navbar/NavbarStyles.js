import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../UI/colors";
import "../UI/global.css";

export const LeftNavbar = styled.div`
    width: 100%;
    padding: 36px 0 28px 0;
    background: ${colors.navbarBackground};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    
    .topNavbar__options {
        width: 100%;
        box-sizing: border-box;
        border-bottom: 1px solid ${colors.borderBottomOptions};
        padding: 12px 0;
    }
`;

export const LinearGradient = styled.div(({width, height}) => css`
    width: ${width};
    height: ${height};
    margin: 0 0 40px 32px;
    background: linear-gradient(270deg, #689EF8 0%, #FF6860 56.25%, #FF9F00 100%);
    border-radius: 5px;
    box-sizing: border-box;
`);

export const Extras = styled.div`
    width: 100%;
    padding: 20px 14px 18px 14px;
    background: ${colors.backgroundExtrasNavbar};
    border-radius: 8px;
    box-sizing: border-box;
`;

export const BottomNavbar = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 132px 24px 0 24px;
`;

export const CreateNew = styled.button`
    width: 100%;
    box-sizing: border-box;
    background: ${colors.createNewBackround};
    display: flex;
    margin: 20px 0 0 0;
    padding: 4px;
    border: none;
    outline: none;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
`;

export const BoxPlus = styled.div`
    padding: 8px;
    background: ${colors.boxPlus};
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`;

export const NameCreateNew = styled.div`
    width: 100%;
    text-align: center;
    text-transform: capitalize;
    font-family: 'Roboto';
    padding: 0 8px;
    box-sizing: border-box;
`;