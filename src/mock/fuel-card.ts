import {faker} from '@faker-js/faker';
import { FuelCardType } from '../types';

export const generateMockFuelCardData = (): FuelCardType => {
  return {
    description: faker.lorem.sentence(),
    dt: faker.date.recent().toISOString(),
    uidHex: faker.datatype.uuid(),
    serial: faker.datatype.bigInt({ min: 100000000000000, max: 999999999999999 }),
    serialServer: faker.datatype.bigInt({ min: 100000000000000, max: 999999999999999 }),
    version: faker.datatype.number({ min: 1, max: 100 }),
    small: faker.datatype.boolean(),
    cardNum: faker.datatype.number({ min: 1000000000000000, max: 9999999999999999 }),
    emitent: faker.datatype.number({ min: 1, max: 100 }),
    cardType: faker.datatype.number({ min: 1, max: 2}),
    walletType: faker.datatype.number({ min: 1, max: 100 }),
    blocked: faker.datatype.boolean(),
    cardOwner: faker.company.name(),
    firmId: faker.datatype.number({ min: 1, max: 100 }),
    dateFirstOperation: faker.date.recent().toISOString(),
    dateRelease: faker.date.past().toISOString(),
    dateLastOperation: faker.date.recent().toISOString(),
    dateDayLimit: faker.date.future().toISOString(),
    colDayLimit: faker.datatype.number({ min: 1, max: 365 }),
    monthLimit: faker.datatype.float({ min: 0, max: 10000 }),
    monthRemain: faker.datatype.float({ min: 0, max: 10000 }),
    dayLimit: faker.datatype.float({ min: 0, max: 1000 }),
    dayRemain: faker.datatype.float({ min: 0, max: 1000 }),
    data14: faker.datatype.float(), //92 
    data15: faker.datatype.float(), //95
    data16: faker.datatype.float(),
    data17: faker.datatype.float(), //ДТ
    data18: faker.datatype.float(), //Газ
    data19: faker.datatype.float(), //95 prof
    data20: faker.datatype.float(),
    data21: faker.datatype.float(), //100 prof
    data22: faker.datatype.float(),
    data23: faker.datatype.float(),
    data24: faker.datatype.float(),
    data25: faker.datatype.float(),
    retAzs: faker.datatype.number({ min: 1, max: 100 }),
    retSmena: faker.datatype.number({ min: 1, max: 100 }),
    retFuel: faker.datatype.number({ min: 1, max: 100 }),
    retVolume: faker.datatype.number({ min: 0, max: 100 }),
    retPrice: faker.datatype.number({ min: 0, max: 100 }),
    longUpdate: faker.datatype.bigInt({ min: 100000000000000, max: 999999999999999 }),
    specUpdCur: faker.datatype.bigInt({ min: 100000000000000, max: 999999999999999 }),
    lastChanges: faker.lorem.sentence(),
    id: faker.datatype.bigInt({ min: 100000000000000, max: 999999999999999 })
  };
};

export const generateMockFuelCardList = (length: number) =>  Array.from({length: length}, () => generateMockFuelCardData())