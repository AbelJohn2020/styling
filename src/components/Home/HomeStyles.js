import styled from "@emotion/styled";
import { colors } from "../UI/colors";


export const HomeStyles = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 64% 36%;
    gap: 20px;
`;

export const HomeLeft = styled.div`
    padding: 24px;
    box-sizing: border-box;
    background: ${colors.home};
`;

export const HomeRight = styled.div`
    padding: 0;
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

export const Statistics = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 16px 24px 0 32px;
`;

export const RightFiles = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 24px 0 32px 0;
`;


export const Advertisements = styled.div`
    background: ${colors.white};
    width: 100%;
    box-sizing: border-box;
    padding: 16px 38px;
    display: flex;
    flex-direction: column;
    border-radius: 18px;
    align-items: center;
`;

export const LimitButton = styled.div`
    width: 120px;
    box-sizing: border-box;
`;

export const PercentDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
`;

export const PercentDivDiv = styled.div`
    margin: 22px 0 20px 0;
    width: 140px; 
    height: 140px;
    box-sizing: border-box;
`;