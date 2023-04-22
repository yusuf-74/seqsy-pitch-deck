import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    background-image: url(${({background}) => background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 5.5em;
    font-weight: 700;
    font-style: normal;
    line-height: 1.2;
    text-transform: uppercase;
    color: white;
`;

export const HeaderImage = styled.img`
    transform: translate(0px, 2.84217e-14px);
    width: 40%;
`;

export const HeaderTypewriter = styled.div`
    color: white;

`;