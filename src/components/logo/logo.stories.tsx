import type { Meta, StoryObj } from '@storybook/react';
import Logo from "./logo";
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta

type Story = StoryObj<typeof Logo>;

export const DefaultSpinner: Story = {
  name: "default logo",
};
