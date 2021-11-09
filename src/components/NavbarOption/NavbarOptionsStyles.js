import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../UI/colors";

export const Option = styled.div(({state}) => css`
    width: 100%;
    background: gray;

    .white {
        width: 8px;
        display: ${ state === true ? 'flex' : 'none'};
        border: ${colors.white} solid 2px;
        background: ${colors.white};
    }

    .styles {
        display: flex;
    }

    .icon {
        color: green;
    }
`);