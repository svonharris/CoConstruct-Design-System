import type { Meta, StoryObj } from "@storybook/react";
import Link from "./Link";

const meta = {
  title: "Internal/Playground/Link", // hide in internal section
  component: Link,
  args: {
    href: "./?path=/story/components-link--docs",
    label: "Link",
    variant: "default",
  },
  argTypes: {
    href: {
      control: "text",
      description: "Specifies the destination URL.",
    },
    label: {
      control: "text",
      description: "Text content displayed to the user.",
    },
    ariaLabel: {
      control: false,
      description: "Accessible label announced by assistive technologies.",
    },
    title: {
      control: false,
      description:
        "Optional tooltip text; defaults to ariaLabel when not provided.",
    },
    variant: {
      control: "radio",
      description: "Determines the visual style of the link.",
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof Link>;

export const PlaygroundDocs: Story = {};
