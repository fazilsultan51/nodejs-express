import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const UserModel = mongoose.connection.model("Users", userSchema);

export default UserModel;
