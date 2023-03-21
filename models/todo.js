import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
  },
});

export default mongoose.model("todo", todoSchema);
