import style from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  ariaLabel: string;
  title?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  variant?: ButtonVariant;
};

type ButtonVariant = "primary" | "secondary";

const variantStyles: Record<ButtonVariant, string> = {
  primary: style.primaryButton,
  secondary: style.secondaryButton,
};

const Button = ({
  children,
  onClick,
  ariaLabel,
  title,
  type = "button",
  disabled,
  variant = "primary",
}: ButtonProps) => {
  return (
    <button
      className={`${style.baseButton} ${variantStyles[variant]}`}
      onClick={onClick}
      aria-label={ariaLabel}
      type={type}
      disabled={disabled}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;
