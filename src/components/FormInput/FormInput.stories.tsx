import type { Meta, StoryObj } from "@storybook/react";
import FormInput from "./FormInput";

const meta = {
  title: "Components/Form Input",
  component: FormInput,
  args: {
    id: "lastName",
    name: "lastName",
    label: "First Name",
    value: "Charlie",
    required: true,
    onChange: () => {},
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
  },
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof FormInput>;

export const Default: Story = {};
