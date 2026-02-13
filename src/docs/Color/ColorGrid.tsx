type ColorGridProps = {
  colors: string[];
};

const ColorGrid = ({ colors }: ColorGridProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
      }}
    >
      {colors.map((color) => (
        <div
          key={color}
          style={{
            backgroundColor: `var(--${color})`,
            width: "50px",
            height: "50px",
            border:
              color === "white"
                ? "1px solid var(--white-off)"
                : "none",
          }}
          title={color}
        />
      ))}
    </div>
  );
};

export default ColorGrid;
