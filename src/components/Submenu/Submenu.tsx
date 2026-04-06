import { useState } from "react";
import Link from "../Link/Link";
import style from "./Submenu.module.css";

type SubmenuItem = {
  label: string;
  href: string;
  ariaLabel: string;
  title?: string;
};

type SubmenuProps = {
  label: string;
  items: SubmenuItem[];
  variant?: "default" | "arrow" | "navigation";
};

const Submenu = ({ label, items, variant = "navigation" }: SubmenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenSubmenu = () => setIsOpen(!isOpen);
  const handleCloseSubmenu = () => setIsOpen(false);

  return (
    <div className={style.Submenu}>
      <button
        className={style.SubmenuToggle}
        onClick={handleOpenSubmenu}
        aria-expanded={isOpen}
        aria-label={`Toggle ${label} menu`}
      >
        {label}
        <span className={style.arrow}>▼</span>
      </button>

      {isOpen && (
        <ul className={style.SubmenuMenu} onMouseLeave={handleCloseSubmenu}>
          {items.map((item) => (
            <li key={item.href} className={style.SubmenuItem}>
              <Link
                href={item.href}
                label={item.label}
                ariaLabel={item.ariaLabel}
                title={item.title ? item.title : item.ariaLabel}
                variant={variant}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Submenu;
