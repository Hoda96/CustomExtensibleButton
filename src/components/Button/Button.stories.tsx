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

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'medium',
    color: 'blue',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Icon Button',
    variant: 'primary',
    size: 'medium',
    color: 'green',
    icon: "🙄",
    isLoading: false
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    variant: 'primary',
    size: 'medium',
    color: 'blue',
    isLoading: true,
  },
};