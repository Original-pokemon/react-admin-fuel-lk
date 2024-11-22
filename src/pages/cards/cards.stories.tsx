import { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { NameSpace, Status } from '#root/const';
import { generateMockNomenclature } from '#root/mock/nomenclature';

import { generateMockCardTransactionList } from '#root/mock/card-transaction';
import Cards from './cards';
import { generateMockFuelCardList } from '#root/mock/fuel-card';

const mockStore = configureMockStore();

const cards = generateMockFuelCardList(100)

const cardsEntities = Object.entries(cards).map(([key, value]) => ({ id: key, ...value }))

const initialState = {
  [NameSpace.App]: {
    nomenclature: generateMockNomenclature()
  },
  [NameSpace.Firm]: {
    status: Status.Success,
    cards: {
      ids: [...Array(100).keys()],
      entities: cardsEntities
    }

  }
};

type TransactionPageType = typeof Cards;


const store = mockStore(initialState);

const meta: Meta<TransactionPageType> = {
  title: 'Cards',
  component: Cards,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </Provider>
    ),
  ],
  tags: ['autodocs'],
};

export default meta

type Story = StoryObj<TransactionPageType>;

export const Default: Story = {

}
