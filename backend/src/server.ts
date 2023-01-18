import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express from "express";
import cors from "cors";
import allitemsRouter from './routers/allitems.router';
import userRouter from './routers/user.router';
import orderRouter from './routers/order.router';
import itemRouter from './routers/item.router';
import ordersRouter from './routers/orderlist.router';
import questionsRouter from './routers/question.router';
import sellersRouter from './routers/seller.router';
import { dbConnect } from './configs/database.config';
dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/allitems", allitemsRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/items", itemRouter);
app.use("/api/orderlist", ordersRouter);
app.use("/api/questions", questionsRouter);
app.use("/api/sellers", sellersRouter);

app.use(express.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'public', 'index.html'))
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})