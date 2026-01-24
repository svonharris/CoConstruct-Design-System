import { useState } from "react";
import style from "./NavBar.module.css";
import logo from "../../assets/BT_CoConstruct_Logos_Color_Stacked.png";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";

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

const logoLink = "/";
const logoAltText = "CoConstruct | Construction Management Software";
const logoAriaLabel = "Go to CoConstruct homepage";
const logoTitle = "Vist the CoConstruct homepage";

const NavBar = ({ navLinks }: NavLinkProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={style.navbar}>
      <div className={style.navContainer}>
        {/* Logo */}
        <div className={style.navLogo}>
          <a
            href={logoLink}
            aria-label={logoAriaLabel}
            title={logoTitle ? logoTitle : logoAriaLabel}
          >
            <img src={logo} alt={logoAltText} className={style.logo} />
          </a>
        </div>

        {/* Hamburger Menu */}
        <button
          className={`${style.hamburger} ${isMenuOpen ? style.active : ""}`}
          onClick={toggleMenu}
          aria-label="View the menu"
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
                title={option.title ? option.title : option.ariaLabel}
              >
                {option.label}
              </a>
            ))}
          </div>

          {/* Button */}
          <Modal
            buttonLabel="Schedule a Demo"
            ariaLabel="Open the schedule a demo form"
            variant="secondary"
            title="Open the schedule a demo form"
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Form />
            </div>
          </Modal>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
