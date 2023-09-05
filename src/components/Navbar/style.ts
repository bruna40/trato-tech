import styled from "styled-components";

export const NavbarContainer = styled.nav`
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    grid-template-areas: 'logo links busca icones';
    height: 100px;
    padding: 0 120px;
    position: absolute;
    width: 100vw;
    z-index: 1;
    background-color: blue;

    @media (max-width: 1024px) {
        grid-template-areas:
            'logo logo'
            'links icones'
            'busca busca';
        grid-template-columns: 6fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        height: 200px;
        justify-items: center;
    }
    @media (max-width: 600px) {
        padding: 0 50px;
    }
`;

export const ImageContainer = styled.img`
    cursor: pointer;
    grid-area: logo;
`;


export const LinksContainer = styled.div`
    grid-area: links;
    display: flex;
    justify-content: flex-start;
    gap: 20px;

    @media (max-width: 1024px) {
        justify-self: start;
    }
    a {
        color: #fff;
        font-size: 22px;
    }
`;

export const SearchContainer = styled.div`
    align-items: center;
    display: flex;
    grid-area: busca;
    width: 100%;
    
`;

export const IconContainer = styled.div`
    display: flex;
    gap: 20px;
    grid-area: icones;
    margin-left: 30px;
    a {
        color: white;
    }
`;

