import { Rule } from "antd/lib/form";

const emailRules: Rule[] = [
  {
    type: "email",
    message: "Моля, въведете валиден имейл!",
  },
  {
    required: true,
    message: "Имейла е задължителен!",
  },
];

const passwordRules: Rule[] = [
  {
    required: true,
    message: "Паролата е задължителна!",
  },
  {
    min: 6,
    message: "Паролата трябва да е поне 6 символа!",
  },
];

const confirmPasswordRules: Rule[] = [
  {
    required: true,
    message: "Моля, потвърдете паролата ви!",
  },
  ({ getFieldValue }) => ({
    validator(rule, value) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }

      return Promise.reject("Паролите не съвпадат!");
    },
  }),
];

const agreementRules: Rule[] = [
  {
    validator: (_, value) =>
      value
        ? Promise.resolve()
        : Promise.reject("Трябва да приемете споразумението"),
  },
];

export { emailRules, passwordRules, confirmPasswordRules, agreementRules };
