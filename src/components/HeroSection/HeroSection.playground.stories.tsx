import type { Meta, StoryObj } from "@storybook/react";
import HeroSection from "./HeroSection";

const meta = {
  title: "Internal/Playground/HeroSection", // hide in internal section
  component: HeroSection,
  args: {
    heading: "Section heading here",
    subheading: "Write some subheading text here.",
    hasBackground: false,
  },
  argTypes: {
    heading: { description: "Heading text to be displayed prominently." },
    subheading: {
      description: "Subheading text to provide additional information.",
    },
    hasBackground: {
      description: "Display a background design.",
      control: "boolean",
    },
  },
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const PlaygroundDocs: Story = {};
