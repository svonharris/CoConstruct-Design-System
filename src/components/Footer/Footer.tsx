import style from "./Footer.module.css";
import Logo from "../Logo/Logo";

type FooterProps = {
  /** Content to be displayed inside the footer. */
  children?: React.ReactNode;
};

const Footer = ({ children }: FooterProps) => {
  return (
    <>
      <footer className={style.container}>
        <div className={style.heading}>
          <Logo variant="compact" />
        </div>
        <hr className={style.divider}></hr>
        <div className={style.content}>{children}</div>
      </footer>
    </>
  );
};

export default Footer;
