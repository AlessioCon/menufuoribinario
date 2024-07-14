import { FC } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Logo from "./../Logo/Logo";

const Header : FC = () => {

    return <header className={style.header}>
                <Logo align={"center"}></Logo>
    </header>
}

export default Header;