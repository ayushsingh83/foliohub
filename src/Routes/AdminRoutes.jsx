import { BrowserRouter, Routes, Route, Link } from "react-router"
import { NavLink } from "react-router-dom"
import LandingPage from "../Pages/LandingPage"
import AboutPage from "../Pages/AboutPage"
import ContactPage from "../Pages/ContactPage"
import AuthPage from "../Pages/AuthPage"
import BrowsePage from "../Pages/BrowsePage"

const AdminRoutes = () => {
    return (
        <div>
            <BrowserRouter>             
                <Routes>    
                    <Route path="/" element={<LandingPage />}></Route>
                    <Route path="/about" element={<AboutPage />}></Route>
                    <Route path="/contact" element={<ContactPage />}></Route>
                    <Route path="/auth" element={<AuthPage />}></Route>
                    <Route path="/browse" element={<BrowsePage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AdminRoutes