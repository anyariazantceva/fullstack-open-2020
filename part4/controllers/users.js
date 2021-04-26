const bcrypt = require("bcryptjs");
const usersRouter = require("express").Router();
const User = require("../models/user");

usersRouter.get("/", async (request, response) => {
  const users = await User.find({});
  response.json(users.map((u) => u.toJSON()));
});

usersRouter.post("/", async (request, response) => {
  const body = request.body;

  if (body.username === "") {
    return response.status(400).json({
      error: "Username is required",
    });
  }
  if (body.password === "") {
    return response.status(400).json({
      error: "Password is required",
    });
  }

  if (body.password && body.password.length < 4) {
    return response
      .status(400)
      .json({ error: "Password should be at least 3 characters" });
  }

  if (body.username && body.username.length < 4) {
    return response
      .status(400)
      .json({ error: "Username should be at least 3 characters" });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash,
  });

  const savedUser = await user.save();
  response.json(savedUser);
});

module.exports = usersRouter;
