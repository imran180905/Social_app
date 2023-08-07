import {rest } from 'msw';
import {setupServer} from 'msw/node';
import {posts} from './data';

export const server = setupServer(
    rest.get('/api/posts' , (req,res,ctx)=>{
        return res(ctx.json(posts));
    }),

)
server.listen();

