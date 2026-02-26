import type { Meta, StoryObj } from "@storybook/react";
import Link from "./Link";

const meta = {
  title: "Components/Navigation/Links",
  component: Link,
  argTypes: {
    variant: {
      control: false, //renders prop documentation without a control
    },
    ariaLabel: {
      control: false,
    },
    title: {
      control: false,
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: "/?path=/story/components-link--default",
    label: "Default Link",
    variant: "default",
  },
};

export const Arrow: Story = {
  args: {
    href: "/?path=/story/components-link--arrow",
    label: "Arrow Link",
    variant: "arrow",
  },
};

export const Navigation: Story = {
  args: {
    href: "/?path=/story/components-link--navigation",
    label: "Navigation Link",
    variant: "navigation",
  },
};
