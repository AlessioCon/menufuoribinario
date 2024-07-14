import { FC } from "react";
import style from "./Header.module.css";
import Logo from "./../Logo/Logo";

const Header : FC = () => {

    return <header className={style.header}>
                <Logo align={"center"}></Logo>
    </header>
}

export default Header;