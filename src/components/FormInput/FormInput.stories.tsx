import type { Meta, StoryObj } from "@storybook/react";
import FormInput from "./FormInput";

const meta = {
  title: "Components/Form Input",
  component: FormInput,
  args: {
    label: "First Name",
    value: "Charlie",
  },
  argTypes: {
    id: {
      control: false, //removes prop control
    },
    name: { control: false },
    type: {
      control: false,
    },
    value: {
      control: "text",
    },
    onChange: {
      table: { disable: true },
    },
    required: {
      control: false,
    },
  },
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof FormInput>;

export const Default: Story = {};
