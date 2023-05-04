import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const jwtSecret = "Asdf@1234";
  // Find the user in the database by email
  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(404).json({ error: "InCorrect Email" });
  }

  // Check if the password is correct
  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return res.status(401).json({ error: "Incorrect password" });
  }

  // Create a JWT and send it to the client
  const token = jwt.sign({ id: user._id, name: user.name }, jwtSecret, {
    expiresIn: "1h",
  });
  res.json({ token });
};

export { userLogin };
