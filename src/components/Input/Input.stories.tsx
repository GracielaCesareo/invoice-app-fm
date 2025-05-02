// src/components/Input/Input.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import React from 'react';

// --- Metadata ---
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    inputSize: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    fullWidth: { control: 'boolean' },
    error: { control: 'text' },
    onChange: { action: 'changed' },
  },
};

export default meta;

// --- Type for Stories ---
type Story = StoryObj<typeof Input>;

// --- Base Template ---
const Template = (args: React.ComponentProps<typeof Input>) => <Input {...args} />;

// --- Stories ---

export const Default: Story = {
  render: Template,
  args: {
    label: 'Default Input',
    placeholder: 'Enter text...',
    inputSize: 'md',
  },
};

export const Small: Story = {
  render: Template,
  args: {
    label: 'Small Input',
    placeholder: 'Small size...',
    inputSize: 'sm',
  },
};

export const Large: Story = {
  render: Template,
  args: {
    label: 'Large Input',
    placeholder: 'Large size...',
    inputSize: 'md',
  },
};

export const FullWidth: Story = {
  render: Template,
  args: {
    label: 'Full Width Input',
    placeholder: 'Expands to container...',
    inputSize: 'md',
    fullWidth: true,
  },
};

export const WithError: Story = {
  render: Template,
  args: {
    label: 'Input with Error',
    placeholder: 'Wrong input...',
    inputSize: 'md',
    error: 'Invalid value',
  },
};
