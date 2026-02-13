import type { Meta, StoryObj } from "@storybook/react";
import SectionGrid from "./SectionGrid";

const meta = {
  title: "Components/Section",
  component: SectionGrid,
  args: {
    children: (
      <>
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "var(--color-brand-green)",
              padding: "20px",
            }}
          ></div>
        ))}
      </>
    ),
  },
  argTypes: {
    variant: {
      control: false, //renders prop documentation without a control
    },
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof SectionGrid>;

export default meta;
type Story = StoryObj<typeof SectionGrid>;

export const OneColumn: Story = {
  args: { variant: "1col" },
};

export const TwoColumn: Story = {
  args: { variant: "2col" },
};

export const ThreeColumn: Story = {
  args: { variant: "3col" },
};
