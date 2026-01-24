import { useState } from "react";
import style from "./ToggleSwitch.module.css";

type ToggleSwitchProps = {
  firstLabel?: string;
  secondLabel?: string;
};

const ToggleSwitch = ({
  firstLabel = "On",
  secondLabel = "Off",
}: ToggleSwitchProps) => {
  const [isSecondOptionSelected, setIsSecondOptionSelected] = useState(false);

  const handleToggleSwitch = (selectSecond: boolean) => {
    setIsSecondOptionSelected(selectSecond);
  };

  return (
    <div className={style.toggleSwitchContainer}>
      <button
        className={`${style.toggleSwitchBtn} ${!isSecondOptionSelected ? "" : style.inactive}`}
        onClick={() => handleToggleSwitch(false)}
      >
        {firstLabel}
      </button>
      <button
        className={`${style.toggleSwitchBtn} ${isSecondOptionSelected ? "" : style.inactive}`}
        onClick={() => handleToggleSwitch(true)}
      >
        {secondLabel}
      </button>
    </div>
  );
};

export default ToggleSwitch;
