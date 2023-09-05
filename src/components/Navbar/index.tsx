import { NavbarContainer, ImageContainer, LinksContainer, SearchContainer, IconContainer } from "./style";
import logo from "../../assets/logo.svg";
import { RiShoppingCart2Line, RiShoppingCartFill } from "react-icons/ri";
import Busca from "../Busca";

export default function Navbar() {
    return(
            <NavbarContainer>
                <ImageContainer src={logo} alt="Logo" />
                <LinksContainer >
                    <a href="/" >Página inicial</a>
                </LinksContainer>
                <SearchContainer>
                    <Busca />
                </SearchContainer>
                <IconContainer>
                    <a href="/carrinho">
                        {
                            window.location.pathname === "/carrinho" ? <RiShoppingCartFill size={30} /> : <RiShoppingCart2Line size={30} />
                        }
                    </a>
                </IconContainer>
            </NavbarContainer>
    )
}