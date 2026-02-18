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
      description: "Determines the visual style of the button.",
    },
    disabled: {
      control: false,
      description: "Disables the button and prevents user interaction.",
    },
    title: {
      table: { disable: true }, //removes prop control
    },
    type: {
      table: { disable: true },
    },
    onClick: {
      description: "Fires when the button is pressed.",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};
