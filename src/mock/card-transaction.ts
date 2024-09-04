import { faker } from "@faker-js/faker";
import { CardTransactionType } from "../types/card-transaction";

const generateRandomTransaction = (): CardTransactionType => {
  const transactionType = faker.helpers.arrayElement([-1, 1]) as -1 | 1;

  return {
    description: "Оперативная транзакция по карте Chip",
    id: faker.datatype.uuid(),
    dt: faker.date.recent().toISOString(),
    firm: faker.datatype.number({ min: 1, max: 100 }),
    card: faker.datatype.bigInt({
      min: 100_000_000_000_000,
      max: 999_999_999_999_999,
    }),
    uidhex: faker.datatype.uuid(),
    op: transactionType,
    wt: faker.datatype.number({ min: 1, max: 100 }),
    fuel: faker.datatype.number({ min: 1, max: 100 }),
    volume: faker.datatype.float({ min: 1, max: 1000 }),
    price: faker.datatype.float({ min: 1, max: 100 }),
    azsprice: faker.datatype.float({ min: 1, max: 100 }),
    azs: faker.datatype.number({ min: 1, max: 100 }),
    smena: faker.datatype.number({ min: 1, max: 100 }),
    smenadt: faker.date.recent().toISOString(),
  };
};

export default generateRandomTransaction;
