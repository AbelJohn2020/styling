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
    padding: 24px 16px;
    background: ${colors.home};
`;

export const HomeRight = styled.div`
    padding: 24px 24px 20px 32px;
    background: ${colors.home};    
`;

