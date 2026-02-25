import type { Meta, StoryObj } from "@storybook/react";
import FormGroup from "./FormGroup";
import FormInput from "../FormInput/FormInput";

const meta = {
  title: "Internal/Playground/Form Grouping", // hide in internal section
  component: FormGroup,
  args: {
    id: "companyName",
    label: "Company Name",
    required: true,
  },
  argTypes: {
    id: {
      control: false,
      description:
        "Unique id used to associate the label with the form control.",
    },
    label: {
      control: "text",
      description: "Text shown in the form field label.",
    },
    required: {
      control: "boolean",
      description: "Shows a required indicator next to the label when true.",
    },
    children: {
      control: false,
      description: "Form control element rendered inside the group.",
    },
  },
} satisfies Meta<typeof FormGroup>;

export default meta;
type Story = StoryObj<typeof FormGroup>;

export const PlaygroundDocs: Story = {
  render: (args) => (
    <FormInput
      id={args.id}
      name={args.id}
      label={args.label}
      value="Acme Corp"
      required={args.required}
      onChange={() => {}}
    />
  ),
};
