import { rest } from "msw";
import { setupServer } from "msw/node";
import { posts } from "./data";

export const server = setupServer(
  rest.get("/api/posts", (req, res, ctx) => {
    return res(ctx.json(posts));
  }),
  rest.post("api/posts/new", async (req, res, ctx) => {
    const newPost = await req.json();
    console.log(newPost);
    newPost.id = posts.length + 1;
    posts.push(newPost);

    return res(
      ctx.status(201),
      ctx.json({
        id: posts.length + 1,
        newPost,
      })
    );
  }),
  rest.get("/api/posts/:id", (req, res, ctx) => {
    const userId = req.params.id;
    console.log(userId);
    const usersPosts=[];
    usersPosts.push(posts.filter((post) => post.userId === userId));
    if (usersPosts) {
      return res(ctx.json(usersPosts));
    } else {
      return res(ctx.json({ message: "no posts to show" }));
    }
  }),
  rest.delete("/api/posts/:id", (req, res, ctx) => {
    const id = req.params.id;
    const postIndex = posts.findIndex(post => post.id === id) 
console.log(req.params.id)
    posts.slice(postIndex, 1)

    return res(ctx.json({message: "Delete successfully"}))
  }),
  rest.get("/api/posts/:id/:postId",(req, res, ctx) => {
    const postId = req.params.postId;
    const userId = req.params.id;
    const postDetails =posts.filter((post) => post.userId === userId && post.id === postId);
    if (postDetails) {
      return res(ctx.json(postDetails));
    } else {
      return res(ctx.json({ message: "no posts to show" }));
    }
  }),
);
server.listen();
