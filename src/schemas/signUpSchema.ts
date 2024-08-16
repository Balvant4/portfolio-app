import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(3, "Must be 3 or more characters long")
  .max(20, "Must be not biger than 20 character")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character");

export const passwordValidation = z
  .string()
  .min(6, "Password must be at least 6 characters long.")
  .max(20, "Password must be no longer than 20 characters.")
  .regex(
    /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm,
    "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, and one digit. No spaces are allowed."
  );

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: passwordValidation,
});
