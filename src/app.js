import express from 'express'
import cookieParser from'cookie-parser'
import cors from "cors"


const app=express();
app.use(cors({
    origin:process.env.origin,
    credentials:true
}));

app.use(express.urlencoded({extended:true,limit:'16kb'}))
app.use(express.json({
    limit:"16kb"
}))
app.use(express.static("public"))
//app.use(bodyParser.json());

app.use(cookieParser())
 //routes
import adminrouter from './routes/admin.routes.js';
import crouselrouter from './routes/crousel.routes.js';
import blogrouter from './routes/blog.routes.js';
 app.use("/api/v1/admin",adminrouter);

app.use("/api/v1/crousel",crouselrouter)

app.use("/api/v1/blog",blogrouter)

export default app;