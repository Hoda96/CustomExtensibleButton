import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'outline', 'ghost'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    color: { control: 'select', options: ['blue', 'green', 'red', 'gray'] },
    isLoading: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// Custom SVG Icon
const CustomIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
  </svg>
);

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: "outline",
    size: 'medium',
    color: "red",
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Icon Button',
    variant: "outline",
    size: "small",
    color: "red",
    icon: <CustomIcon />,
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    variant: 'primary',
    size: 'medium',
    color: 'blue',
    isLoading: false,
    icon: "😍"
  },
};