import {Router} from 'express';
import asyncHandler from 'express-async-handler';
import {HTTP_BAD_REQUEST, HTTP_SUCCESS} from '../constants/http_status';
import {Item, ItemModel} from "../models/item.model";
import {AllitemsModel} from "../models/Allitems.model";
import {SellerModel} from "../models/Seller.model";
import {QuestionModel} from "../models/questions.model";
const router = Router();

router.get("/",asyncHandler(
    async (req, res) => {
        const sellers = await SellerModel.find();
        res.send(sellers);
    }
))

export default router;