import styled , { css } from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    ${({ background }) => background && css`background-image: url(${background});`}
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    ${({ fixed }) => fixed && css`background-attachment: fixed;`}
    ${({ color }) => color && css`color: ${color};`}
    ${({noPadding}) => !noPadding && css`padding: 1% 7%;`}
    ${({ width }) => width && css`width: ${width};`}
    ${({ alignItems }) => alignItems && css`align-items: ${alignItems};`}
    ${({ justifyContent }) => justifyContent && css`justify-content: ${justifyContent};`}
    ${({ onSmall }) => {
        if (onSmall) {
            return css`
                @media (max-width: 768px) {
                    width: 100%;
                }
            `
        }
    }}
    
`;

export const Header = styled.div`
    font-family: "Jost";
    ${({ color }) => color && css`color: ${color};`}
    font-size: 2.5em;
    font-weight: 700;
    font-style: normal;
    line-height: 1.3;
    ${({ margin }) => margin && css`margin: ${margin};`}

`;

export const SubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    ${({justifyContent}) => justifyContent && css`justify-content: ${justifyContent};`}
    ${({ column }) => column && css`flex-direction: column;`}
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
    ${({ width }) => width && css`width: ${width};`}
    ${({ color }) => color && css`color: ${color};`}
    ${({ minHeight }) => minHeight && css`min-height: ${minHeight};`}
    @media (max-width: 768px) {
        width: 100%;
    }
`;
export const ImageWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Image = styled.img`
    width: 100%;
    object-fit: cover;
`;

export const SpecialButton = styled.div`
    @import '~typeface-dm-sans';
    ${({ color }) => color && css`color: ${color};`}
    font-family: 'DM Sans';
    font-size: 0.8em;
    font-weight: 700;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: -0.02em;
    cursor: pointer;
    border-left: 1px solid ${({ color }) => color};
    padding: 12px;
    border-color: ${({ color }) => color};;
`;