import type { Meta, StoryObj } from "@storybook/react";
import FormGroup from "./FormGroup";
import style from "../FormInput/FormInput.module.css";

const meta = {
  title: "Components/Form Group",
  component: FormGroup,
  argTypes: {
    label: {
      control: false,
    },
    children: {
      control: false,
    },
    id: {
      control: false,
    },
  },
} satisfies Meta<typeof FormGroup>;

export default meta;
type Story = StoryObj<typeof FormGroup>;

export const Default: Story = {
  args: {
    id: "firstName",
    label: "First Name",
    required: false,
  },
  render: (args) => (
    <FormGroup {...args}>
      <input
        type="text"
        id={args.id}
        name={args.id}
        value="Janice"
        className={style.formInput}
        required={args.required}
        onChange={() => {}}
      />
    </FormGroup>
  ),
};

export const Required: Story = {
  args: {
    id: "lastName",
    label: "Last Name",
    required: true,
  },
  render: (args) => (
    <FormGroup {...args}>
      <input
        type="text"
        id={args.id}
        name={args.id}
        value="Smith"
        className={style.formInput}
        required={args.required}
        onChange={() => {}}
      />
    </FormGroup>
  ),
};
