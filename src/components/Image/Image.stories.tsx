import type { Meta, StoryObj } from "@storybook/react";
import Image from "./Image";

const meta = {
  title: "Components/Media/Image",
  component: Image,
  args: {
    src: "../src/assets/BT_CoConstruct_Logos_Color_Stacked.png",
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
