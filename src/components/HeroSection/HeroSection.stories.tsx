import type { Meta, StoryObj } from "@storybook/react";
import HeroSection from "./HeroSection";

const meta = {
  title: "Components/Hero Section",
  component: HeroSection,
  args: {
    heading: "Section heading here",
    subheading: "Write some subheading text here.",
  },
  argTypes: {
    hasBackground: {
      control: false, //renders prop documentation without a control
    },
    heading: {
      control: "text",
    },
    subheading: {
      control: "text",
    },
  },
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {};

export const WithBackground: Story = {
  args: {
    hasBackground: true,
  },
};
