import type { Meta, StoryObj } from "@storybook/react";
import SectionGrid from "./SectionGrid";

const meta = {
  title: "Internal/Playground/Section", // hide in internal section
  component: SectionGrid,
  args: {
    variant: "col1",
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
      control: "text",
      description: "Determines the number of columns in the grid.",
    },
    children: {
      control: false,
      description: "Content rendered inside the section grid.",
    },
  },
} satisfies Meta<typeof SectionGrid>;

export default meta;
type Story = StoryObj<typeof SectionGrid>;

export const PlaygroundDocs: Story = {};
