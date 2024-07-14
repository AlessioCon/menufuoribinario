import {  useOutlet } from "react-router-dom";
import Popup from "./../Component/Popup/Popup";
import Home from "./Home";
import Header from "./../Component/Header/Header";
import Footer from "./../Component/Footer/Footer";

export default function Root(){

    const outlet = useOutlet();

    return<>
        <Popup/>
        
        <Header/>
        <main>
            {outlet || <Home/>}
        </main>
        <Footer/>
    </>
}