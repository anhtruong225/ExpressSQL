import { body } from "express-validator";

export const userValidator = [
  body("first_name").notEmpty().withMessage("First name is required"),
  body("last_name").notEmpty().withMessage("Last name is required"),
  body("age")
    .notEmpty()
    .isLength({ min: 1, max: 3 })
    .withMessage("age must be from 0 to 999"),
];
