import style from "./Link.module.css";

type NavLinkOptionProps = {
  href: string;
  label: string;
  ariaLabel: string;
  title?: string;
};

const Link = ({ href, label, ariaLabel, title }: NavLinkOptionProps) => {
  return (
    <>
      <a
        className={style.navLink}
        key={href}
        href={href}
        aria-label={ariaLabel}
        title={title ? title : ariaLabel}
      >
        {label}
      </a>
    </>
  );
};

export default Link;
