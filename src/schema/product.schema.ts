import { z } from "zod";

import {
  title_errors,
  description_errors,
  price_errors,
  discount_errors,
  find_product_errors,
} from "../errors/product.errors";

export const createProductRequestSchema = z.object({
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

export const findProductRequestSchema = z.object({
  id: z.string({
    required_error: find_product_errors.missing_id,
  }),
});

export const deleteProductRequestSchema = z.object({
  id: z.string({
    required_error: find_product_errors.missing_id,
  }),
});

export type createProductBodyType = z.infer<typeof createProductRequestSchema>;
export type findProductBodyType = z.infer<typeof findProductRequestSchema>;
export type deleteProductBodyType = z.infer<typeof deleteProductRequestSchema>;
