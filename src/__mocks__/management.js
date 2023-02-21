import { v4 as uuid } from "uuid";
import { faker } from "@faker-js/faker";

export const users = [...Array(25).keys()].map((elem, idx) => {
  return {
    id: uuid(),
    createdAt: faker.date.betweens("2020-01-01T00:00:00.000Z", "2030-01-01T00:00:00.000Z", 1)[0],
    userName: faker.name.firstName(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number("+251 ### ## ## ##"),
    role: faker.helpers.arrayElement([
      "Admin",
      "Superviser",
      "Report Manager",
      "Operator Manager",
      "Deputy Manager",
      "Test User",
      "Handler",
    ]),
    status: faker.helpers.arrayElement(["Active", "Inactive"]),
  };
});

export const roles = [
  "Admin",
  "Superviser",
  "Report Manager",
  "Operator Manager",
  "Deputy Manager",
  "Test User",
  "Handler",
].map((role, idx) => {
  return {
    id: uuid(),
    role,
    description: faker.lorem.lines(1),
    noUsers: Math.floor(Math.random() * 5) + 1,
    status: faker.helpers.arrayElement(["Active", "Inactive"]),
  };
});
