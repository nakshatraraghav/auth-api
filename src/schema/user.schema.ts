import { z } from "zod";

import {
  name_errors,
  email_errors,
  password_errors,
} from "../errors/user.errors";

export const userRequestSchema = z.object({
  name: z
    .string({
      required_error: name_errors.required_error,
      invalid_type_error: name_errors.invalid_type,
    })
    .min(2, name_errors.min_length)
    .max(30, name_errors.max_length),

  email: z
    .string({
      required_error: email_errors.required_error,
      invalid_type_error: email_errors.invalid_type,
    })
    .email(email_errors.invalid_email)
    .min(5, email_errors.min_length)
    .max(30, email_errors.max_length),

  password: z
    .string({
      required_error: password_errors.required_error,
      invalid_type_error: password_errors.invalid_type,
    })
    .min(8, password_errors.min_length)
    .max(30, password_errors.max_length),
});

export type userRequestBodyType = z.infer<typeof userRequestSchema>;
