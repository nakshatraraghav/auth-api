import mongoose from "mongoose";

export interface productDocument {
  user: mongoose.Types.ObjectId;
  title: string;
  description: string;
  price: number;
  discount: number;
}

const productSchema = new mongoose.Schema<productDocument>({
  user: {
    required: true,
    type: mongoose.SchemaTypes.ObjectId,
    ref: "users",
  },
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
  discount: {
    type: Number,
    default: 0,
  },
});

const productModel = mongoose.model("products", productSchema);

export default productModel;
