import React, { useEffect, useState } from "react";

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

  return (
    <div style={{ margin: "40px 0px" }}>
      {sections.map((section) => (
        <div
          key={section.title}
          style={{
            marginBottom: "2rem",
          }}
        >
          <h3 style={{ marginBottom: "1rem" }}>{section.title}</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 120px))",
              gap: "1rem",
            }}
          >
            {section.colors.map((color) => (
              <div
                key={color.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div style={{ textAlign: "center", marginBottom: "5px" }}>
                  {color.name
                    .replace("--", "")
                    .replace(/^\w/, (c) => c.toUpperCase())}
                  <br />
                  <span style={{ fontSize: "13px" }}>
                    {color.value || "(not defined)"}
                  </span>
                </div>
                <div
                  style={{
                    backgroundColor: color.value || "transparent",
                    width: "100px",
                    height: "100px",
                    borderRadius: "8px",
                    border:
                      color.name === "--white"
                        ? "2px solid var(--white-off)"
                        : "none",
                  }}
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
