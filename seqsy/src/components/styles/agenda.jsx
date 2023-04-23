import styled, { css } from "styled-components";

export const AgendaContainer = styled.div`
    display: flex;
    flex-direction: column;
    ${({ fixed }) => fixed && css`background-attachment: fixed;`}
    background-image: url(${({ background }) => background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 1% 7%;
`;
export const AgendaHeader = styled.div`
    font-family: "Jost";
    color: rgb(255, 255, 255);
    font-size: 2.5em;
    font-weight: 700;
    font-style: normal;
    line-height: 1.3;
    margin: 24px 0;

`;

export const AgendaSubContainer = styled.div`
    display: flex;
`;

export const AgendaContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    width: 50%;
    color: white;
    font-family: 'Jost';
    color: rgb(255, 255, 255);
    font-size: 1.5em;
    font-weight: 700;
    font-style: normal;
    line-height: 1.3;
    @media (max-width: 768px) {
        width: 100%;
        min-height: 300px;
    }
`;

export const AgendaImage = styled.img`
    transform: translate(0px, 0px);
    width: 40%;
    @media (max-width: 768px) {
        display: none;
    }
`;
