import { useState } from "react";
import style from "./NavBar.module.css";
import Logo from "../Logo/Logo";

type NavBarProps = {
  children?: React.ReactNode;
  showHamburger?: boolean;
};

const NavBar = ({ children, showHamburger = true }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={style.navbar}>
      <div className={style.navContainer}>
        {/* Logo */}
        <Logo />

        {/* Hamburger Menu */}
        {showHamburger && (
          <button
            className={`${style.hamburger} ${isMenuOpen ? style.active : ""}`}
            onClick={toggleMenu}
            aria-label="View the menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}

        {/* Navigation Content */}
        <div
          className={`${style.navMenu} ${isMenuOpen ? style.active : ""}`}
          onClick={closeMenu}
        >
          {children}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
