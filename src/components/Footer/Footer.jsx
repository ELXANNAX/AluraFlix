import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <div id="footer">
                <div id="logo">
                    <img src="/images/logo.png" />
                </div>
                <div id="infoCreador">
                    <p id="created">Creado por:</p>
                    <p>Oscar José Albarracín Jaimes</p>
                    <p>-</p>
                    <a href="https://github.com/ELXANNAX">@ELXANNAX</a>
                </div>
            </div>
            <div id="footerMovil">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "active home" : "navButton home"
                    }
                    to="/"
                >
                    HOME
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "active nuevo" : "navButton nuevo"
                    }
                    to="create-video"
                >
                    NUEVO VIDEO
                </NavLink>
            </div>
        </>
    )
}

export default Footer;