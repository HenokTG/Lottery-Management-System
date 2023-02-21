import { v4 as uuid } from "uuid";
import { faker } from "@faker-js/faker";

const operatorName = () => {
  const fakeName = faker.company.catchPhraseNoun();
  const capName = fakeName.charAt(0).toUpperCase() + fakeName.slice(1);
  return faker.helpers.arrayElement([capName + " Gaming", capName + " Bet", capName + " Lottery"]);
};

export const revenues = [...Array(25).keys()].map((elem, idx) => {
  return {
    id: uuid(),
    operatorName: operatorName(),
    comName: faker.company.catchPhraseNoun(),
    gameName: faker.helpers.arrayElement([
      "Scratch",
      "G1X",
      "G2X",
      "Eksa 900",
      "Eksa 3000",
      "AMD RX 6900 XT",
      "Lotto Mini1",
      "Doubles",
      "Sport Saga",
    ]),
    licenceCatagory: faker.helpers.arrayElement([
      "Scratch Cards",
      "Online Casino",
      "Hotel Casino",
      "Public Online Lottery(POL)",
      "Gaming Machine",
      "Online Sport Bettings",
      "Other Games",
    ]),
    sells: faker.finance.amount(50000, 1000000, 2, "$ ", true),
    tax: faker.finance.amount(8000, 130000, 2, "$ ", true),
  };
});

export const payments = [...Array(25).keys()].map((elem, idx) => {
  return {
    id: uuid(),
    operatorName: operatorName(),
    comName: faker.company.catchPhraseNoun(),
    online: faker.finance.amount(5000, 60000, 2, "$ ", true),
    cash: faker.finance.amount(18000, 130000, 2, "$ ", true),
    bank: faker.finance.amount(40000, 230000, 2, "$ ", true),
    wallet: faker.finance.amount(2000, 30000, 2, "$ ", true),
  };
});

export const tickets = [...Array(25).keys()].map((elem, idx) => {
  return {
    id: uuid(),
    gameName: faker.helpers.arrayElement([
      "Scratch",
      "G1X",
      "G2X",
      "Eksa 900",
      "Eksa 3000",
      "AMD RX 6900 XT",
      "Lotto Mini1",
      "Doubles",
      "Sport Saga",
    ]),
    licenceCatagory: faker.helpers.arrayElement([
      "Scratch Cards",
      "Online Casino",
      "Hotel Casino",
      "Public Online Lottery(POL)",
      "Gaming Machine",
      "Online Sport Bettings",
      "Other Games",
    ]),
    operatorName: operatorName(),
    ticketRef: faker.random.alpha({ count: 15, casing: "upper" }),
    amount: faker.finance.amount(5000, 60000, 2, "$ ", true),
    transType: faker.helpers.arrayElement(["Winning", "Valid"]),
    winAmount: faker.finance.amount(18000, 130000, 2, "$ ", true),
    refundAmount: faker.finance.amount(40000, 230000, 2, "$ ", true),
    createdAt: faker.date.betweens("2020-01-01T00:00:00.000Z", "2030-01-01T00:00:00.000Z", 1)[0],
  };
});

export const winTickets = [...Array(25).keys()].map((elem, idx) => {
  return {
    id: uuid(),
    operatorName: operatorName(),
    gameName: faker.helpers.arrayElement([
      "Scratch",
      "G1X",
      "G2X",
      "Eksa 900",
      "Eksa 3000",
      "AMD RX 6900 XT",
      "Lotto Mini1",
      "Doubles",
      "Sport Saga",
    ]),
    phoneNumber: faker.phone.number("+251 ### ## ## ##"),
    ticketRef: faker.random.alpha({ count: 15, casing: "upper" }),
    amount: faker.finance.amount(5000, 60000, 2, "$ ", true),
    paymentType: faker.helpers.arrayElement(["Bank", "Wallet", "Cash"]),
    winAmount: faker.finance.amount(18000, 130000, 2, "$ ", true),
    createdAt: faker.date.betweens("2020-01-01T00:00:00.000Z", "2030-01-01T00:00:00.000Z", 1)[0],
  };
});

export const wallets = [...Array(25).keys()].map((elem, idx) => {
  return {
    id: uuid(),
    operatorName: operatorName(),
    comName: faker.company.catchPhraseNoun(),
    wallet: faker.finance.amount(15000, 120000, 2, "$ ", true),
    credit: faker.finance.amount(5000, 60000, 2, "$ ", true),
    debit: faker.finance.amount(10000, 60000, 2, "$ ", true),
    
  };
});
