import styled from "@emotion/styled";
import { colors } from "../UI/colors";

export const Headers = styled.div`
    display: grid;
    grid-template-columns: 30% 40% 30%;

    .icon {
        color: ${colors.ellipsis};
    }
`;

export const Ellipsis = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
`;

export const Button = styled.button`
    padding: 2px;
    outline: none;
    border: none;
    cursor: pointer;
    background: transparent;
`;