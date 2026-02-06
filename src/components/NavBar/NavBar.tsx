import { useState } from "react";
import style from "./NavBar.module.css";
import Logo from "../Logo/Logo";

type NavBarProps = {
  children?: React.ReactNode;
  showHamburger?: boolean;
};

const NavBar = ({ children, showHamburger = true }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={style.navbar}>
      <div className={style.navContainer}>
        {/* Logo */}
        <Logo />

        {/* Hamburger Menu */}
        {showHamburger && (
          <button
            className={`${style.hamburger} ${isMenuOpen ? style.active : ""}`}
            onClick={handleToggleMenu}
            aria-label="View the menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}

        {/* Navigation Content */}
        <div
          className={`${style.navMenu} ${showHamburger ? `${style.hamburgerVisible} ${isMenuOpen ? style.active : ""}` : ""}`}
        >
          {children}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
