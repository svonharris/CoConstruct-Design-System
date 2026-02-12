import type { Meta, StoryObj } from "@storybook/react";
import Logo from "./Logo";

const meta = {
  title: "Components/Logo",
  component: Logo,
  argTypes: {
    variant: {
      control: false, //renders prop documentation without a control
    },
    href: {
      control: false,
    },
    altText: {
      control: false,
    },
    ariaLabel: {
      control: false,
    },
    title: {
      control: false,
    },
    width: {
      control: "text",
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    width: "185px",
  },
};

export const Compact: Story = {
  args: {
    width: "55px",
    variant: "compact",
  },
};
