import type { Meta, StoryObj } from "@storybook/react";
import FormGroup from "./FormGroup";
import style from "../FormInput/FormInput.module.css";

const meta = {
  title: "Components/FormGroup",
  component: FormGroup,
  args: {
    id: "firstName",
    label: "First Name",
    required: true,
  },
  argTypes: {
    label: {
      control: false,
    },
  },
} satisfies Meta<typeof FormGroup>;

export default meta;
type Story = StoryObj<typeof FormGroup>;

export const Default: Story = {
  render: (args) => (
    <FormGroup {...args}>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value="Smith"
        className={style.formInput}
        required={true}
      />
    </FormGroup>
  ),
};
