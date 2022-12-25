const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const postRegister = async (req, res) => {
  try {
    const { mail, username, password } = req.body;

    // check if the user is already registered
    const userExists = await User.exists({ mail: mail.toLowerCase() });

    if (userExists) {
      return res.status(409).send("User already registered");
    }

    // encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create the user
    const user = await User.create({
      username,
      mail: mail.toLowerCase(),
      password: hashedPassword,
    });

    // create JWT token
    const token = jwt.sign(
      {
        userId: user._id,
        mail,
      },
      process.env.TOKEN_KEY,
      {
        expiresIn: "24h",
      }
    );

    res.status(201).json({
      userDetails: {
        username: user.username,
        mail: user.mail,
        token: token,
      },
    });
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = postRegister;
