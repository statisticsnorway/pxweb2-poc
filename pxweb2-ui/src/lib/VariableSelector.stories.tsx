// import React from 'react'
import { VariableSelector } from './VariableSelector';
import type { Meta, StoryObj } from '@storybook/react';

const values = [{
  label: "Mängd 1 (M1)",
  id: 0
},
{
  label: "Värde (kr)",
  id: 1
},
{
  label: "Mängd 2 (M2)",
  id: 2
}];

const meta: Meta<typeof VariableSelector> = {
  component: VariableSelector,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof VariableSelector>;

export const Primary: Story = {
  args: {
    title: "Statstikvariabel",
    required: false,
    values
  },
};