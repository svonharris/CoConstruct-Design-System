import type { Meta, StoryObj } from "@storybook/react";
import NavBar from "./NavBar";
import Link from "../Link/Link";

const meta = {
  title: "Components/Navigation Bar",
  component: NavBar,
  argTypes: {
    showHamburger: {
      control: false, //renders prop documentation without a control
    },
    children: {
      control: "text",
    },
  },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof NavBar>;

export const NoContent: Story = {};

export const WithContent: Story = {
  args: {
    children: (
      <>
        <Link
          href="/"
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
};

export const WithContentNoHamburger: Story = {
  args: {
    ...WithContent.args,
    showHamburger: false,
  },
};
