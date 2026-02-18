import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "Internal/Playground/Button", // hide in internal section
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const PlaygroundDocs: Story = {
  args: {
    children: "Button",
    variant: "primary",
    disabled: false,
  },
  argTypes: {
    variant: {
      control: "radio",
    },
    disabled: {
      control: "boolean",
    },
  },
};
