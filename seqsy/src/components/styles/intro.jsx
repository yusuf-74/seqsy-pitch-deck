import styled , { css } from "styled-components";


export const Paragraph = styled.p`
font-size:0.8571428571428572em

`;

export const BulletPointContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    ${({ width }) => width && css`width: ${width};`}

`;

export const BulletPoint = styled.div`
    font-family: 'Jost';
    color: rgb(255, 255, 255);
    font-size: 1.5em;
    font-weight: 700;
    font-style: normal;
    line-height: 1.3;
`;
