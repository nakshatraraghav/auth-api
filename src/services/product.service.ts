import mongoose, { FilterQuery, UpdateQuery } from "mongoose";
import productModel, { productDocument } from "../models/product.model";

import type { createProductBodyType } from "../schema/product.schema";

// Create Product
export async function createProduct(input: createProductBodyType) {
  try {
    const product = await productModel.create(input);
    return product;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Find Product
export async function findProduct(id: mongoose.Types.ObjectId) {
  try {
    const products = await productModel.findById(id);
    return products;
  } catch (error) {
    throw error;
  }
}

// Find and Update Product

export async function updateProduct(
  query: FilterQuery<productDocument>,
  updateQuery: UpdateQuery<productDocument>
) {
  try {
    const product = await productModel.findOneAndUpdate(query, updateQuery);
    return product;
  } catch (error) {
    throw error;
  }
}

// Delete Product
export async function deleteProduct(query: FilterQuery<productDocument>) {
  try {
    await productModel.findOneAndDelete(query);
    return true;
  } catch (error) {
    throw error;
  }
}
