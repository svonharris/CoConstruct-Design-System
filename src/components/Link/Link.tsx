import style from "./Link.module.css";

type LinkVariant = "default" | "arrow" | "navigation";

const VARIANT_STYLES: Record<LinkVariant, string> = {
  default: style.linkDefault,
  arrow: style.linkArrow,
  navigation: style.linkNavigation,
};

type LinkProps = {
  href: string;
  label: string;
  ariaLabel: string;
  title?: string;
  variant?: LinkVariant;
};

const Link = ({
  href,
  label,
  ariaLabel,
  title,
  variant = "default",
}: LinkProps) => {
  return (
    <a
      className={`${VARIANT_STYLES[variant]}`}
      href={href}
      aria-label={ariaLabel}
      title={title ? title : ariaLabel}
    >
      {label}
      {/* arrow symbol */}
      {variant === "arrow" && (
        <span aria-hidden="true" className={style.linkArrowSymbol}>
          →
        </span>
      )}
    </a>
  );
};

export default Link;
