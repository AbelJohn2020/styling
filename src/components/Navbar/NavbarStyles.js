import styled from "@emotion/styled";
import { colors } from "../UI/colors";

export const LeftNavbar = styled.div`
    width: 172px;
    padding: 36px 0 28px 0;
    background: ${colors.navbarBackground};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    
    .topNavbar__options {
        width: 100%;
        box-sizing: border-box;
        border-bottom: 1px solid ${colors.borderBottomOptions};
        padding: 12px 0;
    }
`;

export const LinearGradient = styled.div`
    width: 74px;
    height: 21px;
    margin: 0 0 40px 32px;
    background: linear-gradient(270deg, #689EF8 0%, #FF6860 56.25%, #FF9F00 100%);
    border-radius: 5px;
    box-sizing: border-box;
`;

export const Extras = styled.div`
    width: 116px;
    padding: 20px 14px 18px 14px;
    background: ${colors.backgroundExtrasNavbar};
    border-radius: 8px;
    box-sizing: border-box;
`;

export const BottomNavbar = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 161px 0 28px 0;
`;