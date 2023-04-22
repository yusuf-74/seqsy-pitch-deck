import styled from "styled-components";

export const TeamContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${({ background }) => background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    padding: 1% 7%;
`;

export const TeamHeader = styled.div`
    font-family: "Jost";
    color: rgb(255, 255, 255);
    font-size: 2.5em;
    font-weight: 700;
    font-style: normal;
    line-height: 1.3;
    margin: 24px 0;
`;

export const TeamSubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const TeamContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    width: 20%;
    min-height: 400px;
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 8px;
    }
`;

export const MemberName = styled.div`
    font-family: 'Jost';
    color: rgb(255, 255, 255);
    font-size: 1.5em;
    font-weight: 700;
    font-style: normal;
    line-height: 1.3;
`;

export const MemberRole = styled.div`
    font-family: 'Jost';
    font-size: 0.6em;
    color: rgb(255, 255, 255);
    font-weight: 400;
    font-style: normal;
    line-height: 1.6;
`;

export const TeamImage = styled.img`
    transform: translate(0px, 2.84217e-14px);
    width: 90%;
    margin:auto;
    @media (max-width: 768px) {
        width: 60%;
    }

`;