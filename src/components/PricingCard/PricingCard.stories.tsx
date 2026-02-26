import type { Meta, StoryObj } from "@storybook/react";
import PricingCard from "./PricingCard";

const meta = {
  title: "Components/Cards/Pricing Card",
  component: PricingCard,
  args: {
    plan: "Essential",
    price: "$99",
    promo: "$399 after 2 months",
    description:
      "For teams looking to achieve more efficient job sites and simpler project planning. You may just be getting started with software or want to focus on project management and communication.",
  },
  argTypes: {
    href: {
      control: false, //renders prop documentation without a control
    },
  },
} satisfies Meta<typeof PricingCard>;

export default meta;
type Story = StoryObj<typeof PricingCard>;

export const Default: Story = {};
