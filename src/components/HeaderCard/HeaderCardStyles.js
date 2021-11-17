import styled from "@emotion/styled";
import { colors } from "../UI/colors";

export const Headers = styled.div`
    width: 100%;
    box-sizing: border-box;
    margin: 0 0 36px 0;
    display: grid;
    grid-template-columns: 30% 40% 30%;
    box-sizing: border-box;
`;

export const Ellipsis = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    box-sizing: border-box;
`;

export const Button = styled.button`
    padding: 2px;
    outline: none;
    border: none;
    cursor: pointer;
    background: transparent;
    color: ${colors.ellipsis};
    box-sizing: border-box;
`;