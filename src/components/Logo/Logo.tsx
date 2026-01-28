import logo from "../../assets/BT_CoConstruct_Logos_Color_Stacked.png";
import icon from "../../assets/DarkGreenSquare.png";

type LogoProps = {
  width?: string;
  href?: string;
  altText?: string;
  ariaLabel?: string;
  title?: string;
  variant?: "default" | "compact";
};

const Logo = ({
  href = "/",
  altText = "CoConstruct | Construction Management Software",
  ariaLabel = "Go to CoConstruct homepage",
  title = "CoConstruct homepage",
  variant = "default",
}: LogoProps) => {
  return (
    <>
      <a href={href} aria-label={ariaLabel} title={title}>
        {variant === "default" ? (
          <img
            src={logo}
            alt={altText}
            style={{ width: "185px", height: "auto" }}
          />
        ) : variant === "compact" ? (
          <img
            src={icon}
            alt={altText}
            style={{ width: "55px", height: "auto" }}
          />
        ) : (
          ""
        )}
      </a>
    </>
  );
};

export default Logo;
