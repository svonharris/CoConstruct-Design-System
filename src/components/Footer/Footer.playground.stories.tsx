import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";

const meta = {
  title: "Internal/Playground/Footer", // hide in internal section
  component: Footer,
  argTypes: {
    children: {
      control: "text",
      description: "Content to be displayed inside the footer",
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof Footer>;

export const PlaygroundDocs: Story = {
  args: {
    children: "© 2024 CoConstruct. All rights reserved.",
  },
};
