import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { TransactionsList } from './transactions-list';
import { generateMockCardTransactionList } from '#root/mock/card-transaction';
import { generateMockNomenclature } from '#root/mock/nomenclature';
import { NameSpace } from '#root/const';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

type TransactionsListType = typeof TransactionsList;

const mockStore = configureMockStore();
const transactions = generateMockCardTransactionList(100);

const initialState = {
  [NameSpace.App]: {
    nomenclature: generateMockNomenclature()
  },
};

const store = mockStore(initialState);

const meta: Meta<TransactionsListType> = {
  title: 'Transactions/TransactionsList',
  component: TransactionsList,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </Provider>
    ),
  ],
};

export default meta;

type Story = StoryObj<TransactionsListType>;

export const Default: Story = {
  args: {
    transactions: transactions,
  },
};

export const Loading: Story = {
  args: {
    transactions: [],
    isLoading: true,
  },
};