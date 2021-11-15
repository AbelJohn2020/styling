import styled from "@emotion/styled";
import { colors } from "../UI/colors";
import "../UI/global.css";

export const ExtraOpion = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 2px 0;

    .icon,
    .name {
        display: flex;
        color: ${ colors.extraOption };
        align-items: center;
        box-sizing: border-box;
    }

    .icon {
        justify-content: right;
    }

    .name {
        padding: 0 0 0 8px;
        justify-content: left;
        text-transform: capitalize;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 12px;
    }
`;