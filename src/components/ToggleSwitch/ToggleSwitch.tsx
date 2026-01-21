import { useState } from "react";
import style from "./ToggleSwitch.module.css";

type ToggleSwitchProps = {
  firstLabel?: string;
  secondLabel?: string;
};

const ToggleSwitch = ({
  firstLabel = "Monthly",
  secondLabel = "Yearly",
}: ToggleSwitchProps) => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggleSwitch = (yearly: boolean) => {
    setIsYearly(yearly);
  };

  return (
    <div className={style.toggleSwitchContainer}>
      <button
        className={`${style.toggleSwitchBtn} ${!isYearly ? "" : style.inactive}`}
        onClick={() => handleToggleSwitch(false)}
      >
        {firstLabel}
      </button>
      <button
        className={`${style.toggleSwitchBtn} ${isYearly ? "" : style.inactive}`}
        onClick={() => handleToggleSwitch(true)}
      >
        {secondLabel}
      </button>
    </div>
  );
};

export default ToggleSwitch;
