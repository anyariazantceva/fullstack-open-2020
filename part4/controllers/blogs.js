const blogsRouter = require("express").Router();
const Blog = require("../models/blog");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

blogsRouter.get("/", async (request, response, next) => {
  const blogs = await Blog.find({});
  response.json(blogs.map((blog) => blog.toJSON()));
});

blogsRouter.post("/", async (request, response, next) => {
  const body = request.body;

  const decodedToken = jwt.verify(request.token, process.env.SECRET);
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }
  const user = request.user;

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
    user: user._id,
  });

  const savedBlog = await blog.save();
  user.blogs = user.blogs.concat(savedBlog._id);
  await user.save();
  response.json(savedBlog);
});

blogsRouter.get("/:id", async (request, response, next) => {
  const blog = await Blog.findById(request.params.id);
  if (blog) {
    response.json(blog);
  } else {
    response.status(404).end();
  }
});

blogsRouter.delete("/:id", async (request, response, next) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET);
  const { id } = request.params;
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }
  const user = request.user;
  const blog = await Blog.findById(request.params.id);
  if (blog.user.toString() === user._id.toString()) {
    await Blog.findByIdAndRemove(id);
    response.status(204).end();
  } else {
    response.status(401).json({ error: "You can't delete this blog" });
  }
});

blogsRouter.put("/:id", (request, response, next) => {
  const body = request.body;

  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  };

  Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    .then((updatedBlog) => {
      response.json(updatedBlog.toJSON());
    })
    .catch((error) => next(error));
});

module.exports = blogsRouter;
