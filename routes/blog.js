const { Router } = require("express");

const blogRouter = Router();

// const {
//   createBlog,
//   readAllBlogs,
//   readBlog,
//   updateBlog,
//   patchBlog,
//   deleteBlog,
// } = require("../handlers/blog");

// blogRouter.post("", createBlog);
// blogRouter.get("", readAllBlogs);
// blogRouter.get("/:blogId", readBlog);
// blogRouter.put("/:blogId", updateBlog);
// blogRouter.patch("/:blogId", patchBlog);
// blogRouter.delete("/:blogId", deleteBlog);

const blogController = require("../controllers/blog.controllers");

blogRouter.get("/", blogController.blogIndex);
blogRouter.get("/new", blogController.blogCreateGet);
blogRouter.post("/", blogController.blogCreatePost);
blogRouter.get("/:id", blogController.blogDetails);
blogRouter.get("/:id/edit", blogController.blogEditGet);
blogRouter.put("/:id", blogController.blogEditPut);
blogRouter.delete("/:id", blogController.blogDelete);

module.exports = {
  blogRouter,
};
