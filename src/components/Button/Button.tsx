import style from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  ariaLabel: string;
  type?: "button" | "submit";
  disabled?: boolean;
  variant: "primary" | "secondary";
};

const Button = ({
  children,
  onClick,
  ariaLabel,
  type = "button",
  disabled,
}: //   variant,
ButtonProps) => {
  return (
    <button
      className={style.baseButton}
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
