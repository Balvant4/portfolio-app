import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(3, "Must be 3 or more characters long")
  .max(20, "Must be not biger than 20 character")
  .regex(
    /^[A-Za-z\d_!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/,
    "Username can include letters, numbers, and special characters."
  );

export const passwordValidation = z
  .string()
  .min(6, "Password must be at least 6 characters long.")
  .max(20, "Password must be no longer than 20 characters.")
  .regex(
    /^(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d@$!%*?&]*$/,
    "Password must include at least one lowercase letter, one digit, and one special character."
  );

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: passwordValidation,
});
