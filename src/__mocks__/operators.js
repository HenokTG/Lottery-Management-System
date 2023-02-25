import { v4 as uuid } from "uuid";
import { faker } from "@faker-js/faker";

const operatorName = () => {
  const fakeName = faker.company.catchPhraseNoun();
  const capName = fakeName.charAt(0).toUpperCase() + fakeName.slice(1);
  return faker.helpers.arrayElement([capName + " Gaming", capName + " Bet", capName + " Lottery"]);
};

export const operators = [...Array(25).keys()].map((elem, idx) => {
  return {
    id: uuid(),
    address: {
      country: faker.address.country(),
      state: faker.address.state(),
      city: faker.address.cityName(),
      street: faker.address.street(),
    },
    avatarUrl: `/static/images/avatars/avatar_${Math.floor(Math.random() * 10) + 1}.png`,
    createdAt: faker.date.betweens("2020-01-01T00:00:00.000Z", "2030-01-01T00:00:00.000Z", 1)[0],
    email: faker.internet.email(),
    name: faker.name.fullName(),
    comName: operatorName(),
    phone: faker.phone.number("+251 ### ## ## ##"),
    status: faker.helpers.arrayElement(["Active", "Inactive"]),
    noGameCatagory: Math.floor(Math.random() * 5) + 1,
  };
});
