import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json("Signup successful");
  } catch (error) {
    next(error); // send this error to next middleware
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email == "" || password == "") {
    next(errorHandler(400, "All fields are required"));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password); //bcryptjs automatically convert password into hashed and compare with the hashedpassword from DB
    if (!validPassword) {
      return next(errorHandler(400, "Invalid password"));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET); //whatever we add this is going to be encrypted and create a token for us it's like hashing a password. this encrypted value cannot be read normally. and save this encrypted value to the cookie of the browser and then we are going to use it later to authenticate the user

    const { password: pass, ...rest } = validUser._doc; // seperate password and the rest of valid user

    //add it to the cookie by adding a response
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true, // make our cookie secure
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

// we need to get the results from the mongo db, because we signing up the user it takes time we need to wait for that then we will send the response to the user , so it should be asynchronous
