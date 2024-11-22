import type { Meta, StoryObj } from '@storybook/react';
import CardDetailsButton from './card-detail-button';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

type CardDetailsButtonType = typeof CardDetailsButton;

const meta: Meta<CardDetailsButtonType> = {
  title: 'Cards/CardsTable/Cells/CardDetailsButton',
  component: CardDetailsButton,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  render: (args) => <CardDetailsButton   {...args} />,
}
export default meta

type Story = StoryObj<CardDetailsButtonType>;

export const Default: Story = {
  args: {
    cardnum: 123456,
  },

}