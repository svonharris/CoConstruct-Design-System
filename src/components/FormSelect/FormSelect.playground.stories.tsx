import type { Meta, StoryObj } from "@storybook/react";
import FormSelect from "./FormSelect";
import { useArgs } from "storybook/preview-api";

const meta = {
  title: "Internal/Playground/Form Select", // hide in internal section
  component: FormSelect,
  args: {
    id: "revenue",
    name: "revenue",
    label: "What is your average annual revenue?",
    value: "",
    onChange: () => {},
    options: [
      { value: "0-499k", label: "$0 - 499K" },
      { value: "500k-999k", label: "$500K - 999K" },
      { value: "1m-1.99m", label: "$1M - 1.99M" },
      { value: "2m-4.99m", label: "$2M - 4.99M" },
    ],
    required: true,
  },
  argTypes: {
    id: {
      control: false,
      description: "Unique id used for the select and its label association.",
    },
    name: {
      control: false,
      description: "Form field name submitted with form data.",
    },
    label: {
      control: "text",
      description: "Text displayed as the select field label.",
    },
    value: {
      control: "text",
      description: "Currently selected option value.",
    },
    onChange: {
      description: "Fires when the selected option changes.",
    },
    options: {
      control: "object",
      description: "List of selectable options with value and label.",
    },
    required: {
      control: "boolean",
      description: "Marks the select field as required.",
    },
  },
} satisfies Meta<typeof FormSelect>;

export default meta;
type Story = StoryObj<typeof FormSelect>;

export const PlaygroundDocs: Story = {
  render: (args) => {
    const [{ value }, updateArgs] = useArgs();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      updateArgs({ value: e.target.value });
    };

    return <FormSelect {...args} value={value} onChange={handleChange} />;
  },
};
