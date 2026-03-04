import type { Meta, StoryObj } from "@storybook/react";
import Logo from "./Logo";

const meta = {
  title: "Internal/Playground/Logo", // hide in internal section
  component: Logo,
  args: {
    width: "auto",
    href: "./",
    variant: "default",
  },
  argTypes: {
    width: {
      control: "text",
      description: "Sets the rendered width of the logo.",
    },
    href: {
      control: "text",
      description: "Specifies where the logo link navigates.",
    },
    altText: {
      control: false,
      description: "Accessible alternative text for the logo image.",
    },
    ariaLabel: {
      control: false,
      description: "Accessible label for the logo link.",
    },
    title: {
      control: false,
      description: "Tooltip text shown on hover.",
    },
    variant: {
      control: "radio",
      description: "Determines whether the full or compact logo is shown.",
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof Logo>;

export const PlaygroundDocs: Story = {};
