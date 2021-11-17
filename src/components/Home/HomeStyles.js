import styled from "@emotion/styled";
import { colors } from "../UI/colors";


export const HomeStyles = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: grid;
    box-sizing: border-box;
    grid-template-columns: 64% 36%;
    gap: 20px;
`;

export const HomeLeft = styled.div`
    padding: 24px;
    box-sizing: border-box;
    background: ${colors.home};
`;

export const HomeRight = styled.div`
    padding: 24px 24px 20px 32px;
    box-sizing: border-box;
    background: ${colors.home};    
`;

export const Board = styled.div`
    display: grid;
    grid-template-columns: 32% 32% 32%;
    box-sizing: border-box;
    margin: 24px 0 40px 0;
`;

export const ResentFiles = styled.div`
    display: grid;
    grid-template-columns: 56% 20% 24%;
    box-sizing: border-box;
    padding: 16px 0 2px 0;
`;