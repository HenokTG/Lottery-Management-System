import { v4 as uuid } from "uuid";
import { faker } from "@faker-js/faker";

export const activity = [...Array(25).keys()].map((elem, idx) => {
  return {
    id: uuid(),
    module: faker.helpers.arrayElement(["Game", "User", "Operator"]),
    type: faker.helpers.arrayElement(["Create", "Update"]),
    performedOn: faker.helpers.arrayElement([
      "AAA Gamin",
      "test@io.io",
      "Scratch",
      "Online Casino",
      "agsdjd",
      "Card Game",
      "Hand Bet",
    ]),
    description: faker.lorem.lines(1),
    createdAt: faker.date.betweens("2020-01-01T00:00:00.000Z", "2030-01-01T00:00:00.000Z", 1)[0],
  };
});
