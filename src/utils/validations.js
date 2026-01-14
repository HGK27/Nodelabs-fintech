import { z } from "zod";

const emailRule = z
  .string()
  .min(1, "Email is required")
   .regex(z.regexes.html5Email, "Please enter a valid email address");
const passwordRule = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[0-9]/, "Password must contain at least one number");


// LOGIN ŞEMASI
export const loginSchema = z.object({
  email: emailRule,
  password: passwordRule,
});

// REGISTER ŞEMASI
export const registerSchema = z.object({
  fullName: z.string().min(2, "İsim çok kısa"),
  email: emailRule,
  password: passwordRule, 
});