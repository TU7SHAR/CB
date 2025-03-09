import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mail: { type: String, required: true, unique: true },
  mobile: { type: String, required: true, unique: true },
  pwd: { type: String, required: true },
});

const users = mongoose.models.users || mongoose.model("users", userSchema);
export default users;
