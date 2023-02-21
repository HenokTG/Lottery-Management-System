import { v4 as uuid } from "uuid";
import { faker } from "@faker-js/faker";

const operatorName = () => {
  const fakeName = faker.company.catchPhraseNoun();
  const capName = fakeName.charAt(0).toUpperCase() + fakeName.slice(1);
  return faker.helpers.arrayElement([capName + " Gaming", capName + " Bet", capName + " Lottery"]);
};

export const games = [...Array(25).keys()].map((elem, idx) => {
  return {
    id: uuid(),
    createdAt: faker.date.betweens("2020-01-01T00:00:00.000Z", "2030-01-01T00:00:00.000Z", 1)[0],
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
    description: faker.lorem.lines(1),
    status: faker.helpers.arrayElement(["Active", "Inactive"]),
  };
});
