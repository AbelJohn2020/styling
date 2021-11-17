import styled from '@emotion/styled';
import { colors } from '../UI/colors';
import '../UI/global.css';

export const TitleStyles = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const H1 = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
`;

export const H2 = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-transform: capitalize;
`;

export const Icons = styled.div`
    display: flex;
    .darkIcon,
    .lightIcon {
        font-size: 16px;
    }

    .darkIcon {
        color: ${colors.darkIcon};
    }

    .lightIcon {
        color: ${colors.lightIcon};
    }
`;