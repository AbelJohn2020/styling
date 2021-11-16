import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../UI/colors";
import '../UI/global.css';
export const Option = styled.div(({state}) => css`
    width: 100%;
    display: flex;
    height: 44px;
    justify-content: right;
    box-sizing: border-box;

    .white {
        width: 4px;
        display: ${ state.active === true ? 'flex' : 'none'};
        border-radius: 0 6px 6px 0;
        border: ${colors.white} solid 2px;
        background: ${colors.white};
        box-sizing: border-box;
    }

    .styles {
        width: 95%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        color: ${colors.navbarColor};
        box-sizing: border-box;
        outline: none;
    }

    .styles:visited {
        color: ${colors.navbarColor}
    }

    .icon,
    .name {
        display: flex;
        color: ${ state.active === true ? colors.white : colors.navbarColor};
        box-sizing: border-box;
    }

    .icon {
        width: 20%;
        justify-content: right;
    }

    .name {
        width: 70%;
        justify-content: left;
        text-transform: capitalize;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 12px;
    }
`);