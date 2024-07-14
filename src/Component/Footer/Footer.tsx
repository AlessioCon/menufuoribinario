import { FC } from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer : FC = () => {

    return <footer className={style.footer}>
        <div>
            <p className={style.title}>Esplora</p>
            <ul className={style.list}>
                <li><Link to="">Home</Link></li>
                <li><Link to="events">Eventi</Link></li>
            </ul>
        </div>
        <div>
            <p className={style.title}>Seguici</p>
            <nav className={style.nav_social}>
                <Link className={`${style.link_logo} ${style.logo_instagram}`} to="https://www.instagram.com/gad.mania/" target="_blank" title="instagram">instagram</Link>
                <Link className={`${style.link_logo} ${style.logo_tiktok}`} to="https://www.tiktok.com/@gad_mania?_t=8mqLFi8vChE&_r=1" target="_blank" title="TikTok">tiktok</Link>
            </nav>
            
            <ul className={style.list}>
                
            </ul>
        </div>
    </footer>
}

export default Footer;