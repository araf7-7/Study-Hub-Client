import { Outlet } from "react-router-dom";
import Header from "./Head&Foot/Header";
import Footer from "./Head&Foot/Footer";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;