import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  args: { onClick: fn() },
  argTypes: {
    variant: {
      control: false, //renders prop documentation without a control
    },
    disabled: {
      control: false,
    },
    title: {
      table: { disable: true }, //removes prop control
    },
    type: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

/** Primary Button design and code. */
export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

/** Secondary Button design and code. */
export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

/** Disabled Button design and code. */
export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};
