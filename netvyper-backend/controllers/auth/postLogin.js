const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const postLogin = async (req, res) => {
  try {
    const { password, mail } = req.body;
    const user = await User.findOne({ mail: mail.toLowerCase() });

    if (user && (await bcrypt.compare(password, user.password))) {
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
        mail: mail,
        token: token,
      });
    } else {
      return res.status(401).send("Invalid credentials");
    }
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = postLogin;
