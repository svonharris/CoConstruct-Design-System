import type { Meta, StoryObj } from "@storybook/react";
import HeroSection from "./HeroSection";

const meta = {
  title: "Components/Hero Section",
  component: HeroSection,
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

/** Hero Section without a background. */
export const Default: Story = {
  args: {
    heading: "Section heading here",
    subheading: "Write some subheading text here.",
  },
};

/** Hero Section with a background design. */
export const WithBackground: Story = {
  args: {
    ...Default.args,
    hasBackground: true,
  },
};
