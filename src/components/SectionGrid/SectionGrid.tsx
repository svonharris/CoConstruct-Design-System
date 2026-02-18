import style from "./SectionGrid.module.css";

type SectionGrid = {
  children: React.ReactNode;
  variant?: SectionGridVariant;
};
type SectionGridVariant = "col1" | "col2" | "col3";

const VARIANT_STYLES: Record<SectionGridVariant, string> = {
  col1: style.sectionColOne,
  col2: style.sectionColTwo,
  col3: style.sectionColThree,
};

const SectionGrid = ({ children, variant = "col1" }: SectionGrid) => {
  return (
    <section className={`${VARIANT_STYLES[variant]} ${style.section}`}>
      {children}
    </section>
  );
};

export default SectionGrid;
