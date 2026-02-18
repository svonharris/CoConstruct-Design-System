import type { Meta, StoryObj } from "@storybook/react";
import PricingCard from "./PricingCard";

const meta = {
  title: "Internal/Playground/Pricing Card", // hide in internal section
  component: PricingCard,
  args: {
    plan: "Essential",
    price: "$99",
    promo: "$399 after 2 months",
    description:
      "For teams looking to achieve more efficient job sites and simpler project planning. You may just be getting started with software or want to focus on project management and communication.",
  },
  argTypes: {
    plan: {
      control: "text",
      description: "Name of the pricing plan.",
    },
    price: {
      control: "text",
      description: "Monthly price displayed on the card.",
    },
    promo: {
      control: "text",
      description: "Promotional subtext shown beneath the price.",
    },
    description: {
      control: "text",
      description: "Summary of plan features and intended audience.",
    },
    href: {
      control: false,
      description: "Destination URL used when the sign-up button is clicked.",
    },
  },
} satisfies Meta<typeof PricingCard>;

export default meta;
type Story = StoryObj<typeof PricingCard>;

export const PlaygroundDocs: Story = {};
