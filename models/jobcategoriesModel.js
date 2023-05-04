import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const CategoryModel = mongoose.connection.model("job_categories", userSchema);

export default CategoryModel;
