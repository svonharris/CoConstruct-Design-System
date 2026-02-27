import type { Meta, StoryObj } from "@storybook/react";
import Image from "./Image";

const meta = {
  title: "Components/Media/Image",
  component: Image,
  args: {
    src: "https://cdn.prod.website-files.com/5dd697a92383b03af38eecdc/65d6079efd15d67edbffad56_co-homepage-masthead-p-800.webp",
    width: "500px",
    height: "auto",
  },
  argTypes: {
    altText: { control: false }, //renders prop documentation without a control
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {};
