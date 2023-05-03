import { z } from "zod";

import {
  title_errors,
  description_errors,
  price_errors,
  discount_errors,
} from "../errors/product.errors";

export const productRequestSchema = z.object({
  title: z
    .string({
      required_error: title_errors.required_error,
      invalid_type_error: title_errors.invalid_type,
    })
    .min(5, title_errors.min_length)
    .max(30, title_errors.max_length),
  description: z
    .string({
      required_error: description_errors.required_error,
      invalid_type_error: description_errors.invalid_type,
    })
    .min(6, description_errors.min_length)
    .max(280, description_errors.max_length),

  price: z
    .number({
      required_error: price_errors.required_error,
      invalid_type_error: price_errors.invalid_type,
    })
    .min(1, price_errors.min_price),

  discount: z
    .number({
      invalid_type_error: discount_errors.invalid_type,
    })
    .min(1, discount_errors.min_discount)
    .optional(),
});

export type productRequestBodyType = z.infer<typeof productRequestSchema>;
