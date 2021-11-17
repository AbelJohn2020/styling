import styled from "@emotion/styled";
import { colors } from "../UI/colors";

export const CardFile = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: grid;
    padding: 10px 20px 10px 12px;
    grid-template-columns: 56.7% 20.7% 23%;
    background: ${colors.white};
    margin: 16px 0;
    border-radius: 10px
`;

export const FileTitle = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
`;

export const FileIcon = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 70% 30%;
    align-items: center;
`;

export const EllipsisHorizontal = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;