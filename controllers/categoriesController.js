import CategoryModel from "../models/jobcategoriesModel.js";

const Createcategory = async (req, res) => {
  const { name, description } = req.body;
  const category = new CategoryModel({ name, description });
  try {
    await category.save();
    res.status(200).json(category);
  } catch (error) {
    res.status(401).json("Server Error");
  }
};
const GetCategory = async (req, res) => {
  try {
    const category = await CategoryModel.find();
    res.status(200).json(category);
  } catch (error) {
    res.status(401).json("Server Error");
  }
};

const UpdateCategory = async (req, res) => {
  const category = await CategoryModel.findById(req.params.id);
  category.name = req.body.name;
  category.description = req.body.description;
  try {
    await category.save();
    res.status(200).json(category);
  } catch (error) {
    res.status(401).json("Server Error");
  }
};
const deleteCategory = async (req, res) => {
  // console.log(req.user.id);
  try {
    const categoryId = req.params.id;
    const category = await CategoryModel.findByIdAndDelete(categoryId);
    if (category) {
      res.status(200).json({ message: "Category deleted" });
    } else {
      res.status(404).json({ error: "Category not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};
export { Createcategory, GetCategory, UpdateCategory, deleteCategory };
