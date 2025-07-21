import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import ScrollToTop from "../components/common/ScrollToTop";

function FrontLayout(){
    return(
        <>
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default FrontLayout;