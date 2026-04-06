import type { Meta, StoryObj } from "@storybook/react";
import FormInput from "./FormInput";

const meta = {
  title: "Internal/Playground/Form Input", // hide in internal section
  component: FormInput,
  args: {
    id: "firstName",
    name: "firstName",
    label: "First Name",
    value: "Charlie",
    required: true,
    onChange: () => {},
  },
  argTypes: {
    id: {
      control: false,
      description: "Unique id used for the input and its label association.",
    },
    name: {
      control: false,
      description: "Form field name submitted with form data.",
    },
    type: {
      control: false,
      description: "HTML input type, such as text, email, or password.",
    },
    label: {
      control: "text",
      description: "Text displayed as the field label.",
    },
    value: {
      control: "text",
      description: "Current value shown in the input.",
    },
    required: {
      control: "boolean",
      description: "Marks the input as required.",
    },
    onChange: {
      description: "Fires when the input value changes.",
    },
  },
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof FormInput>;

export const PlaygroundDocs: Story = {};
