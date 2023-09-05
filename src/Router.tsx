import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout/>}>
                    <Route path="/home" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}