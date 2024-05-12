import { Outlet } from "react-router-dom";
import Header from "./Head&Foot/Header";



const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;