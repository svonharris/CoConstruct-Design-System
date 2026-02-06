import type { Meta, StoryObj } from "@storybook/react";
import Link from "./Link";

const meta = {
  title: "Components/Link",
  component: Link,
  argTypes: {
    variant: {
      control: false, //renders prop documentation without a control
    },
    href: {
      //   control: false, //renders prop documentation without a control
    },
    title: {
      table: { disable: true }, //removes prop control
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: "#",
    label: "Default Link",
    // ariaLabel: "Default Link",
    variant: "default",
  },
};

export const Arrow: Story = {
  args: {
    href: "#",
    label: "Arrow Link",
    // ariaLabel: "Arrow Link",
    variant: "arrow",
  },
};

export const Navigation: Story = {
  args: {
    href: "#",
    label: "Navigation Link",
    // ariaLabel: "Navigation Link",
    variant: "navigation",
  },
};
