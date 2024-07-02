import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CandidateSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      default: null,
    },
    sign: {
      type: String,
      default: null,
    },
    count: {
      type: Number,
      default: 0,
    },
    status: {
      type: Number,
      enum: [0, 1],
      default: 1,
    },
  },
  { timestamps: true }
);

export default mongoose.model("candidate", CandidateSchema);
