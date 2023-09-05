import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./style";
import Header from "../../components/Header";

export default function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <Outlet />
        </LayoutContainer>
    )
}