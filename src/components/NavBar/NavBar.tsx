import { useState } from "react";
import style from "./NavBar.module.css";
import Button from "../Button/Button";
import logo from "../../assets/BT_CoConstruct_Logos_Color_Stacked.png";

type NavLinkOptionProps = {
  href: string;
  label: string;
  ariaLabel: string;
  title?: string;
};

type NavLinkProps = {
  navLinks: NavLinkOptionProps[];
  //   navLinks: [
  //     {
  //       href: string;
  //       label: string;
  //     },
  //   ];
};

const altText = "CoConstruct | Construction Management Software";
const logoTitle = "Vist the CoConstruct homepage";
const logoLink = "/";

const NavBar = ({ navLinks }: NavLinkProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={style.navbar}>
      <div className={style.navContainer}>
        {/* Logo */}
        <div className={style.navLogo}>
          <a href={logoLink}>
            <img
              src={logo}
              alt={altText}
              title={logoTitle}
              className={style.logo}
            />
          </a>
        </div>

        {/* Hamburger Menu */}
        <button
          className={`${style.hamburger} ${isMenuOpen ? style.active : ""}`}
          onClick={toggleMenu}
          aria-label="View the navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <div
          className={`${style.navMenu} ${isMenuOpen ? style.active : ""}`}
          onClick={closeMenu}
        >
          <div className={style.navLinks}>
            {navLinks.map((option) => (
              <a
                key={option.href}
                href={option.href}
                aria-label={option.ariaLabel}
                title={option.title}
              >
                {option.label}
              </a>
            ))}
          </div>

          {/* Button */}
          <Button
            onClick={() => console.log("Schedule a demo clicked")}
            ariaLabel="Schedule a demo with CoConstruct"
            variant="secondary"
          >
            Schedule a demo
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
