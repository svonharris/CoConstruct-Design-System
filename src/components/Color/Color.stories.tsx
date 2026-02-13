import type { Meta, StoryObj } from "@storybook/react";
// import style from "../../index.css";

const meta = {
  title: "Components/Color",
} satisfies Meta<unknown>;

export default meta;
type Story = StoryObj<typeof meta>;

const colors = [
  "black",
  "white",
  "white-off",
  "charcoal",
  "grey-dark",
  "grey-mid",
  "grey-cool",
  "grey",
  "grey-light",
  "grey-pale",
  "grey-silver",
  "green",
  "green-emerald",
  "green-mint",
  "blue",
  "red",
];

/** Displays all the color variables defined in the design system. */
export const AllColors: Story = {
  render: () => (
    <>
      {colors.map((color) => (
        <div
          key={color}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            backgroundColor: `var(--${color})`,
            width: "50px",
            height: "50px",
            border: color === "white" ? "1px solid var(--white-off)" : "none",
          }}
        ></div>
      ))}
      {/* <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          backgroundColor: "var(--black)",
          width: "50px",
          height: "50px",
        }}
      ></div> */}
      {/* <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          backgroundColor: "var(--white)",
          width: "50px",
          height: "50px",
          border: "1px solid var(--white-off)",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          backgroundColor: "var(--white-off)",
          width: "50px",
          height: "50px",
        }}
      ></div> */}
    </>
  ),
};
