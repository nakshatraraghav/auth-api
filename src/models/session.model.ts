import mongoose from "mongoose";

export interface sessionDocument {
  user: mongoose.Types.ObjectId;
  valid: boolean;
  userAgent: string;
  createdAt: Date;
  updatedAt: Date;
}

const sessionSchema = new mongoose.Schema<sessionDocument>({
  user: {
    required: true,
    type: mongoose.SchemaTypes.ObjectId,
    ref: "users",
  },
  valid: {
    type: Boolean,
    default: true,
  },
  userAgent: {
    required: true,
    type: String,
  },
});

const sessionModel = mongoose.model("sessions", sessionSchema);
export default sessionModel;
