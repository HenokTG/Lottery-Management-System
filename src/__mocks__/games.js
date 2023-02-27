import { v4 as uuid } from "uuid";
import { faker } from "@faker-js/faker";

const logoList = [
  "/static/images/logos/cards.png",
  "/static/images/logos/casino.png",
  "/static/images/logos/game-machine.png",
  "/static/images/logos/scratch.png",
  "/static/images/logos/sports-betting.png",
];

export const games = [
  "Scratch",
  "G1X",
  "G2X",
  "Eksa 900",
  "Eksa 3000",
  "AMD RX 6900 XT",
  "Lotto Mini1",
  "Doubles",
  "Sport Saga",
].map((elem, idx) => {
  return {
    id: uuid(),
    logo: logoList[Math.floor(Math.random() * 4)],
    createdAt: faker.date.betweens("2020-01-01T00:00:00.000Z", "2030-01-01T00:00:00.000Z", 1)[0],
    gameName: elem,
    licenceCatagory: faker.helpers.arrayElement([
      "Scratch Cards",
      "Online Casino",
      "Hotel Casino",
      "Public Online Lottery(POL)",
      "Gaming Machine",
      "Online Sport Bettings",
      "Other Games",
    ]),
    description: faker.lorem.lines(1),
    status: faker.helpers.arrayElement(["Active", "Inactive"]),
  };
});
