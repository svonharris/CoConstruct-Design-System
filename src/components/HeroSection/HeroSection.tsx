import style from "./HeroSection.module.css";

type HeroSectionProps = {
  heading: string;
  subheading: string;
};

const HeroSection = ({ heading, subheading }: HeroSectionProps) => {
  return (
    <>
      <h1 className={style.title}>{heading}</h1>
      <p className={style.subtitle}>{subheading}</p>
    </>
  );
};
export default HeroSection;
