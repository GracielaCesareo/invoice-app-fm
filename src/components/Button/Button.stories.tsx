// src/components/Button/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { FaBeer, FaArrowRight } from 'react-icons/fa';
import Button from './Button';
import React from 'react';

// --- Metadata ---
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    iconPosition: {
      control: { type: 'radio' },
      options: ['start', 'end'],
    },
    fullWidth: { control: 'boolean' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
    icon: { control: false }, // We'll handle icons manually
  },
};

export default meta;

// --- Type for Stories ---
type Story = StoryObj<typeof Button>;

// --- Base Template ---
const Template = (args: React.ComponentProps<typeof Button>) => <Button {...args} />;

// --- Stories ---

export const Primary: Story = {
  render: Template,
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary: Story = {
  render: Template,
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
  },
};

export const Danger: Story = {
  render: Template,
  args: {
    children: 'Danger Button',
    variant: 'danger',
    size: 'md',
  },
};

export const WithIconStart: Story = {
  render: Template,
  args: {
    children: 'Cheers!',
    variant: 'primary',
    size: 'md',
    icon: <FaBeer />,
    iconPosition: 'start',
  },
};

export const WithIconEnd: Story = {
  render: Template,
  args: {
    children: 'Go!',
    variant: 'primary',
    size: 'md',
    icon: <FaArrowRight />,
    iconPosition: 'end',
  },
};

export const LoadingState: Story = {
  render: Template,
  args: {
    children: 'Loading...',
    variant: 'primary',
    size: 'md',
    loading: true,
  },
};

export const DisabledState: Story = {
  render: Template,
  args: {
    children: 'Disabled Button',
    variant: 'secondary',
    size: 'md',
    disabled: true,
  },
};

export const FullWidth: Story = {
  render: Template,
  args: {
    children: 'Full Width Button',
    variant: 'primary',
    size: 'md',
    fullWidth: true,
  },
};

export const SmallSize: Story = {
  render: Template,
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'sm',
  },
};

export const LargeSize: Story = {
  render: Template,
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'lg',
  },
};
