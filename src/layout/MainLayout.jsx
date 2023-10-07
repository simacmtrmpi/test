import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";

const MainLayout = () => {
    const locPath = useLocation();
    useEffect(()=>{
        if(locPath.pathname === '/'){
            document.title= 'Home'
        }else{

            document.title = `Phone ${locPath.pathname.replace('/','-')}`;
        }
        if(locPath.state){
            document.title = `${locPath.state}`
        }
    },[locPath])
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;