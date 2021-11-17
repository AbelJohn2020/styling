import styled from "@emotion/styled";
import { colors } from "../UI/colors";
import '../UI/global.css';

export const Information = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 0 8px;
    box-sizing: border-box;
`;

export const TypeInformation = styled.div`
    display: flex;
    box-sizing: border-box;
`;

export const Storage = styled.div`
    width: 54px;
    padding: 6px 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    line-height: 9px;
    color: ${colors.darkIcon};
    background: ${colors.white};
    box-sizing: border-box;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
`;

export const FilesRightStyles = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: ${colors.lightGray} solid 2px;
    padding: 8px 0;
`;