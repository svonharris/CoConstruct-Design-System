import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";

const meta = {
  title: "Components/Footer",
  component: Footer,
  args: {
    children: "© 2024 CoConstruct. All rights reserved.",
  },
  argTypes: {
    children: {
      control: "text",
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof Footer>;

/** Default Footer design and code. */
export const Default: Story = {};
