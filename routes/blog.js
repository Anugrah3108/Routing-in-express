const { Router } = require("express");

const blogRouter = Router();

const {
  createBlog,
  readAllBlogs,
  readBlog,
  updateBlog,
  patchBlog,
  deleteBlog,
} = require("../handlers/blog");

blogRouter.post("", createBlog);
blogRouter.get("", readAllBlogs);
blogRouter.get("/:blogId", readBlog);
blogRouter.put("/:blogId", updateBlog);
blogRouter.patch("/:blogId", patchBlog);
blogRouter.delete("/:blogId", deleteBlog);

module.exports = {
  blogRouter,
};
