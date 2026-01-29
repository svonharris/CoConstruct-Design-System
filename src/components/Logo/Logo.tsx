import logo from "../../assets/BT_CoConstruct_Logos_Color_Stacked.png";
import icon from "../../assets/DarkGreenSquare.png";
import Image from "../Image/Image";

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
          <Image src={logo} altText={altText} width="185px" height="auto" />
        ) : variant === "compact" ? (
          <Image src={icon} altText={altText} width="55px" height="auto" />
        ) : (
          ""
        )}
      </a>
    </>
  );
};

export default Logo;
