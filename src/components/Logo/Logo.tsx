import logo from "../../assets/BT_CoConstruct_Logos_Color_Stacked.png";

type LogoProps = {
  width?: string;
  href?: string;
  altText?: string;
  ariaLabel?: string;
  title?: string;
};

const Logo = ({
  width = "185px",
  href = "/",
  altText = "CoConstruct | Construction Management Software",
  ariaLabel = "Go to CoConstruct homepage",
  title = "Visit the CoConstruct homepage",
}: LogoProps) => {
  return (
    <>
      <a href={href} aria-label={ariaLabel} title={title ?? ariaLabel}>
        <img src={logo} alt={altText} style={{ width, height: "auto" }} />
      </a>
    </>
  );
};

export default Logo;
