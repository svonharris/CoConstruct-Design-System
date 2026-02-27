import React, { useEffect, useState } from "react";
import style from "./ColorGrid.module.css";

type BrandColor = {
  name: string;
  value: string;
};

type ColorSection = {
  title: string;
  colors: BrandColor[];
};

export const ColorGrid: React.FC = () => {
  const [sections, setSections] = useState<ColorSection[]>([]);

  const colorGroups = [
    {
      title: "Neutrals / Blacks / Greys",
      names: [
        "--white",
        "--white-off",
        "--grey-silver",
        "--grey-pale",
        "--grey-light",
        "--grey",
        "--grey-cool",
        "--grey-mid",
        "--grey-dark",
        "--charcoal",
        "--black",
      ],
    },
    {
      title: "Greens",
      names: ["--green-mint", "--green", "--green-emerald"],
    },
    {
      title: "Blues",
      names: ["--blue"],
    },
    {
      title: "Reds",
      names: ["--red"],
    },
  ];

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);

    const groupedColors = colorGroups.map((group) => ({
      title: group.title,
      colors: group.names.map((name) => ({
        name,
        value: rootStyles.getPropertyValue(name).trim(),
      })),
    }));

    setSections(groupedColors);
  }, []);

  const swatchClassByName: Record<string, string> = {
    "--white": style.swatchWhite,
    "--white-off": style.swatchWhiteOff,
    "--grey-silver": style.swatchGreySilver,
    "--grey-pale": style.swatchGreyPale,
    "--grey-light": style.swatchGreyLight,
    "--grey": style.swatchGrey,
    "--grey-cool": style.swatchGreyCool,
    "--grey-mid": style.swatchGreyMid,
    "--grey-dark": style.swatchGreyDark,
    "--charcoal": style.swatchCharcoal,
    "--black": style.swatchBlack,
    "--green-mint": style.swatchGreenMint,
    "--green": style.swatchGreen,
    "--green-emerald": style.swatchGreenEmerald,
    "--blue": style.swatchBlue,
    "--red": style.swatchRed,
  };

  return (
    <div className={style.colorGridWrapper}>
      {sections.map((section) => (
        <div key={section.title} className={style.section}>
          <h2>{section.title}</h2>

          <div className={style.sectionGrid}>
            {section.colors.map((color) => (
              <div key={color.name} className={style.colorItem}>
                <div className={style.colorLabel}>
                  {color.name
                    .replace("--", "")
                    .replace(/^\w/, (c) => c.toUpperCase())}
                  <br />
                  <span className={style.colorValue}>
                    {color.value || "(not defined)"}
                  </span>
                </div>
                <div
                  className={`${style.colorSwatch} ${
                    swatchClassByName[color.name] || style.swatchUndefined
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorGrid;
