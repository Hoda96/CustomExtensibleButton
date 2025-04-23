import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'outline'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    isLoading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: "outline",
    size: 'md',
    iconLeft: "🥇"
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Button with Icon',
    variant: 'primary',
    size: 'md',
    iconLeft: '🚀',
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    variant: "secondary",
    size: "lg",
    isLoading: false,

    iconLeft: "😍",

    disabled: false
  },
};