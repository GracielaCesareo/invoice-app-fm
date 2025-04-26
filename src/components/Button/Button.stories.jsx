// src/components/Button/Button.stories.jsx
import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Primary = () => (
  <Button variant="primary">Primary Button</Button>
);

export const Secondary = () => (
  <Button variant="secondary">Secondary Button</Button>
);

export const Danger = () => (
  <Button variant="danger">Danger Button</Button>
);
