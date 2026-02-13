import type { Meta, StoryObj } from "@storybook/react";
import FormSelect from "./FormSelect";

const meta = {
  title: "Components/Form Select",
  component: FormSelect,
  args: {
    label: "Which builder type best describes your business?",
    options: [
      { value: "residentials", label: "Residential" },
      { value: "commercial", label: "Commercial" },
      { value: "industrial", label: "Industrial" },
    ],
    required: true,
  },
  argTypes: {
    id: {
      control: false, //removes prop control
    },
    name: { control: false },
    value: {
      table: { disable: true },
    },
    onChange: {
      table: { disable: true },
    },
    options: {
      control: "object",
    },
  },
} satisfies Meta<typeof FormSelect>;

export default meta;
type Story = StoryObj<typeof FormSelect>;

export const Default: Story = {
  args: {
    options: [{
      "value": "residentials",
      "label": "Residfwefewfewfential"
    }, {
      "value": "commercial",
      "label": "Commercial"
    }, {
      "value": "industrial",
      "label": "Industrial"
    }],
  },
};
