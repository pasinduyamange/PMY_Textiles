import {Router} from 'express';
import asyncHandler from 'express-async-handler';
import {HTTP_BAD_REQUEST, HTTP_SUCCESS} from '../constants/http_status';
import {Item, ItemModel} from "../models/item.model";
import {AllitemsModel} from "../models/Allitems.model";
import {OrderModel} from "../models/order.model";
const router = Router();

router.get("/",asyncHandler(
    async (req, res) => {
        const orders = await OrderModel.find();
        res.send(orders);
    }
))



export default router;