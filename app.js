const express = require("express");
const { blogRouter } = require("./routes/blog");
const { healthRouter } = require("./routes/health");

const PORT = 8080;
const app = express();

app.use(express.json());

app.use("/blog", blogRouter);
app.use("/health", healthRouter);

// Basic Way to use CRUD !TODO: mount routes
// app.get("/health", (req, res) => {
//   res.send("OK");
// });

// // Create
// app.post("/blog", (req, res) => {
//   //   console.log(req.body);
//   const { body } = req;

//   const { author, content } = body;

//   if (author && content) {
//     blogs.push({ author, content });
//     res.status(200).send("OK");
//     return;
//   }
//   res.status(400).send("!OK");
// });

// // Read all blogs
// app.get("/blog", (req, res) => {
//   res.status(200).json(blogs).send();
// });

// // Read individual blog using ID
// app.get("/blog/:blogId", (req, res) => {
//   let { blogId } = req.params;
//   console.log(blogId);

//   if (blogId > 0 && blogId <= blogs.length) {
// blogId -= 1;
//     const blogToReturn = blogs[blogId];
//     return res.status(200).json(blogToReturn).send();
//   }
//   //   res.json(blogs).send();
//   res.status(404).send();
// });

// // Update
// app.put("/blog/:blogId", (req, res) => {
//   const { author, content } = req.body;
//   let { blogId } = req.params;

//   if (blogId > 0 && blogId <= blogs.length && author && content) {
//     blogId -= 1;
//     blogs[blogId] = { author, content };

//     return res.status(200).send();
//   }

//   return res.status(400).send();
// });

// app.patch("/blog/:blogId", (req, res) => {
//   const { author, content } = req.body;
//   let { blogId } = req.params;

//   if (blogId > 0 && blogId <= blogs.length) {
//     blogId -= 1;
//     // blogs[blogId] = { ...blogs[blogId], author, content };

//     if (author) blogs[blogId].author = author;
//     if (content) blogs[blogId].content = content;

//     return res.status(200).send();
//   }

//   return res.status(400).send();
// });

// // Delete
// app.delete("/blog/:blogId", (req, res) => {
//   let { blogId } = req.params;

//   if (blogId > 0 && blogId <= blogs.length) {
//     blogId -= 1;

//     blogs.splice(blogId, 1);

//     return res.status(200).send();
//   }

//   return res.status(404).send();
// });

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
