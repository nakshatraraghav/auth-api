import { z } from "zod";

import { email_errors, password_errors } from "../errors/session.errors";

export const sessionRequestSchema = z.object({
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

export type sessionRequestBodyType = z.infer<typeof sessionRequestSchema>;
