import User from "../model/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;
    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    const hashPassword = bcrypt.hashSync(password, 12);

    const created = await User.create({
      username,
      email,
      password: hashPassword,
      phone,
    });
    if (created) {
      return res.status(200).json({
        data: created,
        message: "Signup successful",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({
      username: username,
    });
    if (!existingUser) {
      return res.status(400).json({
        message: "User doesn't exists",
      });
    }
    const checkPassword = bcrypt.compareSync(password, existingUser.password);
    if (checkPassword) {
      const token = jwt.sign(
        {
          id: existingUser._id,
          email: existingUser.email,
          username: existingUser.username,
          role:existingUser.role
        },
        "mysecretkey",
        { expiresIn: "1h" }
      );
      return res.status(200).json({
        data: existingUser,
        token,
        message: "Signin successful",
      });
    }
    return res.status(400).json({
      message: "Invalid credentials",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users) {
      return res.status(200).json({
        data: users,
        message: "Users",
      });
    }

    return res.status(400).json({
      message: "Invalid credentials",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getProfile = async (req, res) => {
  try {
    const id = req.user.id;
    const user = await User.findOne({ _id: id });
    if (user) {
      return res.status(200).json({
        data: user,
        message: "Profile data",
      });
    }

    return res.status(400).json({
      message: "Invalid credentials",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
