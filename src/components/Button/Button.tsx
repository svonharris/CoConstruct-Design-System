import style from "./Button.module.css";

type ButtonProps = {
  /** Children to be rendered inside the button. */
  children: React.ReactNode;
  /** Click handler. */
  onClick: () => void;
  /** Title attribute for the button. */
  title?: string;
  /** Button type attribute. */
  type?: "button" | "submit";
  /** Set button as disabled. */
  disabled?: boolean;
  /** Style of the button. */
  variant?: "primary" | "secondary";
};

const VARIANT_STYLES: Record<"primary" | "secondary", string> = {
  primary: style.primaryButton,
  secondary: style.secondaryButton,
};

/** Button component for user interaction. */
const Button = ({
  children,
  onClick,
  title,
  type = "button",
  disabled = false,
  variant = "primary",
}: ButtonProps) => {
  return (
    <button
      className={`${style.baseButton} ${VARIANT_STYLES[variant]}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;
