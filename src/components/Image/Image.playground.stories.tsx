import type { Meta, StoryObj } from "@storybook/react";
import Image from "./Image";

const meta = {
  title: "Internal/Playground/Image", // hide in internal section
  component: Image,
  args: {
    src: "https://cdn.prod.website-files.com/5dd697a92383b03af38eecdc/65d6079efd15d67edbffad56_co-homepage-masthead-p-800.webp",
    width: "400px",
    height: "auto",
    altText: "Team members working together in a modern office setting.",
  },
  argTypes: {
    src: {
      control: "text",
      description: "Defines the image source URL or file path.",
    },
    width: {
      control: "text",
      description: "Sets the rendered width of the image.",
    },
    height: {
      control: "text",
      description: "Sets the rendered height of the image.",
    },
    altText: {
      control: false,
      description: "Provides accessible alternative text for the image.",
    },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof Image>;

export const PlaygroundDocs: Story = {};
