import styled , { css } from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const SubHeader = styled.div`
    @import '~typeface-dm-sans';
    ${({ color }) => color && css`color: ${color};`}
    font-family: 'DM Sans';
    font-size: 1.3em;
    color: rgb(104, 75, 255);
    font-weight: 500;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: -0.02em;
`;

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 60%;
    padding: 5% 5%;
`;
export const Image = styled.img`
    width: 40%;
`;

export const TextWrapper = styled.div`
    @import '~typeface-dm-sans';
    font-family: 'DM Sans';
    color: rgb(0, 0, 0);
    font-weight: 700;
    font-style: normal;
`;