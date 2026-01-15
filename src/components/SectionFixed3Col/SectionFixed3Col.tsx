// import React from "react";
import style from "./SectionFixed3Col.module.css";

type SectionFixed3ColProps = { children: React.ReactNode };

const SectionFixed3Col = ({ children }: SectionFixed3ColProps) => {
  return <div className={style.sectionColThree}>{children}</div>;
};

export default SectionFixed3Col;
