import { Meta, StoryFn } from '@storybook/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { CardModal } from './card-modal';
import { NameSpace, Status } from '#root/const';
import { generateMockFuelCardList, generateMockFuelCardData } from '#root/mock/fuel-card';
import { CardType } from '#root/types';
import { generateMockNomenclature } from '#root/mock/nomenclature';


const card: CardType = generateMockFuelCardData()

const mockStore = configureMockStore();

const initialState = {
  [NameSpace.App]: {
    nomenclature: generateMockNomenclature()
  },
};

const store = mockStore(initialState);

const meta: Meta<typeof CardModal> = {
  title: 'Cards/CardModal',
  component: CardModal,
  decorators: [
    (Story, context) => {
      return (
        <Provider store={store}>
          <MemoryRouter>
            <Story />
          </MemoryRouter>
        </Provider>

      );
    },
  ],
};

export default meta

const Template: StoryFn<{ card: CardType }> = () => <CardModal card={card} />;

export const Default = Template.bind({});
Default.args = {
  card: card,
};