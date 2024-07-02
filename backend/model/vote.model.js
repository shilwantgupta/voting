import mongoose from "mongoose";
import candidateModel from "./candidate.model";
import userModel from "./user.model";
const Schema = mongoose.Schema;

const Vote = new Schema(
  {
    candidate: {
      type: Schema.Types.ObjectId,
      required: true,
      ref:candidateModel
    },
    user: {
      type: Schema.Types.ObjectId,
      required:true,
      ref:userModel
    },
    status: {
      type: Number,
      enum: [0, 1],
      default: 1,
    },
  },
  { timestamps: true }
);

export default mongoose.model("vote", Vote);
