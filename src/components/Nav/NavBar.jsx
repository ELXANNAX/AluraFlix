import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div id="navBar">
        <div id="logo">
          <img src="/images/logo.png" alt="logo" />
        </div>

        <div id="buttonsContainer">
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
      </div>
    </>
  );
};

export default NavBar;
