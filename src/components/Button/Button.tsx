import style from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  ariaLabel: string;
  type?: "button" | "submit";
  disabled?: boolean;
  variant?: ButtonVariant;
};

type ButtonVariant = "primary" | "secondary";

const Button = ({
  children,
  onClick,
  ariaLabel,
  type = "button",
  disabled,
  variant = "primary",
}: ButtonProps) => {
  const variantStyles: Record<ButtonVariant, string> = {
    primary: style.primaryButton,
    secondary: style.secondaryButton,
  };

  return (
    <button
      className={`${style.baseButton} ${variantStyles[variant]}`}
      onClick={onClick}
      aria-label={ariaLabel}
      type={type}
      disabled={disabled}
      title={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
