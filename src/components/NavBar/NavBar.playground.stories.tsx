import type { Meta, StoryObj } from "@storybook/react";
import NavBar from "./NavBar";
import Link from "../Link/Link";

const meta = {
  title: "Internal/Playground/Navigation Bar", // hide in internal section
  component: NavBar,
  args: {
    showHamburger: true,
    children: (
      <>
        <Link
          href="/pricing"
          label="Pricing"
          ariaLabel="Go to Pricing Page"
          variant="navigation"
        />
        <Link
          href="/resources"
          label="Current Customers"
          ariaLabel="Go to Current Customers Page"
          variant="navigation"
        />
        <Link
          href="tel:800-213-3392"
          label="800-213-3392"
          ariaLabel="Give us a call today"
          variant="navigation"
        />
      </>
    ),
  },
  argTypes: {
    showHamburger: {
      control: "boolean",
      description: "Shows or hides the hamburger toggle on smaller screens.",
    },
    children: {
      control: false,
      description: "Navigation content rendered inside the navbar.",
    },
  },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof NavBar>;

export const PlaygroundDocs: Story = {};
