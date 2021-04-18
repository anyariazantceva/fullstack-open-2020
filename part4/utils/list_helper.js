const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  let sum = 0;
  blogs.forEach((blog) => {
    sum += blog.likes;
  });
  return sum;
};

const favoriteBlog = (blogs) => {
  return blogs.reduce((p, c) => (p.likes > c.likes ? p : c));
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
