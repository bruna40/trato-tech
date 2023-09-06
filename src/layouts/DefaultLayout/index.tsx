import { Outlet } from "react-router-dom";

import { LayoutContainer } from "./style";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function DefaultLayout() {
    return (
        <LayoutContainer>
            <Navbar />
            <Outlet/>
            <Footer/>
        </LayoutContainer>
    )
}