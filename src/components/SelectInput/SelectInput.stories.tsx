import type { Meta, StoryObj } from '@storybook/react';
import SelectInput from './SelectInput';
import React from 'react';

type Option = {
  label: string;
  value: string;
};

const staticOptions: Option[] = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
];

const asyncFetcher = async (query: string): Promise<Option[]> => {
  await new Promise((res) => setTimeout(res, 500));
  return staticOptions.filter((opt) =>
    opt.label.toLowerCase().includes(query.toLowerCase())
  );
};

const meta: Meta<typeof SelectInput> = {
  title: 'Components/SelectInput',
  component: SelectInput,
};

export default meta;
type Story = StoryObj<typeof SelectInput>;

export const StaticOptions: Story = {
  render: () => (
    <SelectInput
      label="Frontend Framework"
      options={staticOptions}
      onSelect={(opt: any) => console.log('Selected:', opt)}
    />
  ),
};

export const AsyncOptions: Story = {
  render: () => (
    <SelectInput
      label="Async Search"
      fetchOptions={asyncFetcher}
      onSelect={(opt: any) => console.log('Selected:', opt)}
    />
  ),
};

export const WithCustomInput: Story = {
  render: () => (
    <SelectInput
      label="Custom Tags"
      fetchOptions={asyncFetcher}
      allowCustomInput
      onSelect={(opt: any) => console.log('Selected or Created:', opt)}
    />
  ),
};
