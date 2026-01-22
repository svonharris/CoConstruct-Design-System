import style from "./HeroSection.module.css";

type HeroSectionProps = {
  heading: string;
  subheading: string;
  hasBackground?: boolean;
};

const HeroSection = ({
  heading,
  subheading,
  hasBackground = false,
}: HeroSectionProps) => {
  return (
    <div
      className={hasBackground ? style.containerBackground : style.container}
    >
      <h1 className={style.title}>{heading}</h1>
      <p className={style.subtitle}>{subheading}</p>
    </div>
  );
};

export default HeroSection;
