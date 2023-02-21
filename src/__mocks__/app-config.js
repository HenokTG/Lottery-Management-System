import { v4 as uuid } from "uuid";
import { faker } from "@faker-js/faker";

export const appConfig = [...Array(25).keys()].map((elem, idx) => {
  return {
    id: uuid(),
    key: faker.helpers.arrayElement([
      "email_subject_admin",
      "page_size_report",
      "email_content_otp",
    ]),
    value: faker.helpers.arrayElement([
      "120",
      "LSLB: Registration Successful",
      "Last 7 Days",
      "30",
      "<p>Dear Sir/Madam, </p><br><p>Thank you for...",
      "EMAIL",
      "Hand Bet",
    ]),
    description: faker.lorem.lines(1),
  };
});
