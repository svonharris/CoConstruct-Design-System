import style from "./HeroSection.module.css";

type HeroSectionProps = {
  /** Heading text to be displayed prominently. */
  heading: string;
  /** Subheading text to provide additional information. */
  subheading: string;
  /** Display a background design. */
  hasBackground?: boolean;
};

/** Component for displaying a prominent heading and subheading, optionally with a background. */
const HeroSection = ({
  heading,
  subheading,
  hasBackground = false,
}: HeroSectionProps) => {
  return (
    <div
      className={`${style.container} ${hasBackground ? style.containerBackground : ""}`}
    >
      <h1 className={style.title}>{heading}</h1>
      <p className={style.subtitle}>{subheading}</p>
    </div>
  );
};

export default HeroSection;
