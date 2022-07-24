import { Fragment, useState, useEffect } from "react";
import TopNav from "../header/topnav";
import NavbarView from "../header/navbar";
import Footer from "../footer/footer";

const Layout = ( {children} ) => {
    const [scroll, setScroll] = useState(false);
        useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 0);
        });
    }, []);
    return ( 
        <Fragment>
            <TopNav />
            <header className={scroll ? "sticky-top" : ""}>
                <NavbarView />
            </header>
            { children }
            <Footer />
        </Fragment>
     );
}
 
export default Layout;