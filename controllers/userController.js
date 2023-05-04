import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";

const createUser = async (req, res) => {
  const { name, email, userpassword } = req.body;
  const saltRounds = 10;
  const password = await bcrypt.hash(userpassword, saltRounds);
  const user = new UserModel({ name, email, password });
  try {
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

export { createUser, getUsers };
