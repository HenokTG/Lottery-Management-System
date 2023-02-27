import { v4 as uuid } from "uuid";
import { faker } from "@faker-js/faker";

export const licenceCatagories = [
  "Scratch Cards",
  "Online Casino",
  "Hotel Casino",
  "Public Online Lottery(POL)",
  "Gaming Machine",
  "Online Sport Bettings",
  "Other Games",
].map((elem, idx) => {
  return {
    id: uuid(),
    createdAt: faker.date.betweens("2020-01-01T00:00:00.000Z", "2030-01-01T00:00:00.000Z", 1)[0],
    licenceCatagory: elem,
    description: faker.lorem.lines(1),
    status: faker.helpers.arrayElement(["Active", "Inactive"]),
  };
});
