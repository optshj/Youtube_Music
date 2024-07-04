import Koa from 'koa';
import Router from 'koa-router';
import mongoose from 'mongoose';
import bodyParser from 'koa-bodyparser';
import dotenv from 'dotenv';
import api from './api';
import cors from '@koa/cors';


dotenv.config();
const app = new Koa();
const router = new Router();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI || '', {
    }).then(() => {
        console.log(`Connected to MongoDB URI: ${process.env.MONGO_URI}`);
    }).catch(e => {
        console.error(e);
})


app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(bodyParser());
router.use('/api', api.routes());
app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})