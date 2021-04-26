const Blog = require("../models/blog");
const User = require("../models/user");

const initialBlogs = [
  {
    title: "A new blog post",
    author: "Tom Smith",
    url: "tom@smith.com",
    likes: 7,
  },
  {
    title: "A second post",
    author: "Bob Walker",
    url: "bob@walker.com",
    likes: 3,
  },
];

const blogsInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map((blog) => blog.toJSON());
};

const usersInDb = async () => {
  const users = await User.find({});
  return users.map((u) => u.toJSON());
};

const nonExistingId = async () => {
  const blog = new Blog({
    title: "A new blog will be removed soon",
    author: "Bob Walker",
    url: "bob@walker.com",
    likes: 1,
  });
  await blog.save();
  await blog.remove();

  return blog._id.toString();
};

module.exports = {
  initialBlogs,
  blogsInDb,
  usersInDb,
  nonExistingId,
};
