
import express, {Request, Response} from 'express';
import cors from 'cors'
import  dbConnection  from "./configs/db.js";
import session from 'express-session';
import  { MongoStore } from 'connect-mongo';
import AuthRouter from './routes/authRoutes.js';
import ThumbnailRouter from './routes/ThumbnailRoutes.js';
import UserRouter from './routes/UserRoutes.js';


declare module 'express-session'{
    interface SessionData{
        isLoggedIn:boolean;
        userId:string;
    }
}


await dbConnection();
const app = express();

// midd
app.use(cors({
    origin:['http://localhost:5173',],
    credentials:true
}));
app.use(session({
    secret:process.env.SESSION_SECRET as string,
    resave:false,
    saveUninitialized:false,
    cookie: {maxAge:1000*60*60*24*7},
    store: MongoStore.create({
        mongoUrl:process.env.MONOGDB_URI as string,
        collectionName: 'session'
    })
}))
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req:Request,res:Response)=>{
    res.send("Server is Live");
});

app.use('/api/auth',AuthRouter);
app.use('/api/thumbnail',ThumbnailRouter);
app.use('/api/user',UserRouter);

app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
    
}) 