import {rest } from 'msw';
import {setupServer} from 'msw/node';
import {posts} from './data';

export const server = setupServer(
    rest.get('/api/posts' , (req,res,ctx)=>{
        return res(ctx.json(posts));
    }),

    rest.delete("/api/posts/:id", (req, res, ctx) => {
        const id = req.params.id;
        const postIndex = posts.findIndex(post => post.id === id) 
console.log(req.params.id)
        posts.slice(postIndex, 1)

        return res(ctx.json({message: "Delete successfully"}))
      }),

)
server.listen();

