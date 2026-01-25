import { useState } from "react";
import style from "./NavBar.module.css";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import Logo from "../Logo/Logo";
import Link from "../Link/Link";

type NavLinkOptionProps = {
  href: string;
  label: string;
  ariaLabel: string;
  title?: string;
};

type NavLinkProps = {
  navLinks: NavLinkOptionProps[];
};

const NavBar = ({ navLinks }: NavLinkProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={style.navbar}>
      <div className={style.navContainer}>
        {/* Logo */}
        <Logo />

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
              <Link
                href={option.href}
                label={option.label}
                ariaLabel={option.ariaLabel}
                title={option.title ? option.title : option.ariaLabel}
                variant="navigation"
              />
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
