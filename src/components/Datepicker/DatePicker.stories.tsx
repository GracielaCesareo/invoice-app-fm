import type { Meta, StoryObj } from '@storybook/react';
import DatePicker from './DatePicker';
import { useState } from 'react';
import React from 'react';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

const Template = (args: any) => {
  const [date, setDate] = useState<Date | null>(null);
  return <DatePicker {...args} selected={date} onChange={setDate} />;
};

export const Default: Story = {
  render: () => <Template label="Issue Date" />,
};

export const WithMinMax: Story = {
  render: () => (
    <Template
      label="Deadline"
      minDate={new Date('2025-01-01')}
      maxDate={new Date('2025-12-31')}
    />
  ),
};

export const PreSelected: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(new Date('2025-05-01'));
    return (
      <DatePicker
        label="Pre-selected Date"
        selected={date}
        onChange={setDate}
      />
    );
  },
};

export const CustomPlaceholder: Story = {
  render: () => (
    <Template label="Start" placeholder="Choose a date..." />
  ),
};
