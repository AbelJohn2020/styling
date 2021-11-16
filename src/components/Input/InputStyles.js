import styled from "@emotion/styled";
import { colors } from "../UI/colors";

export const InputStyles = styled.div`
    width: 100%;
    padding: 0 12px;
    margin: 0 0 24px 0;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background: ${colors.white};
    color: ${colors.placeholder};
    border-radius: 4px;
`;

export const InputText = styled.input`
    width: 100%;
    box-sizing: border-box;
    padding: 8px;
    border: none;
    outline: none;
    color: ${colors.search};

    &::placeholder {
        color: ${colors.placeholder};
    }
`;