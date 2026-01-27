import style from "./SectionGrid.module.css";

type SectionGrid = {
  children: React.ReactNode;
  variant?: SectionGridVariant;
};
type SectionGridVariant = "1col" | "2col" | "3col";

const VARIANT_STYLES: Record<SectionGridVariant, string> = {
  "1col": style.sectionColOne,
  "2col": style.sectionColTwo,
  "3col": style.sectionColThree,
};

const SectionGrid = ({ children, variant = "1col" }: SectionGrid) => {
  return (
    <div className={`${VARIANT_STYLES[variant]} ${style.section}`}>
      {children}
    </div>
  );
};

export default SectionGrid;
