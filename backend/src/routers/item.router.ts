import {Router} from 'express';
import asyncHandler from 'express-async-handler';
import {HTTP_BAD_REQUEST, HTTP_SUCCESS} from '../constants/http_status';
import {Item, ItemModel} from "../models/item.model";
import {AllitemsModel} from "../models/Allitems.model";
import {SellerModel} from "../models/Seller.model";
const router = Router();

router.get("/",asyncHandler(
    async (req, res) => {
        const items = await ItemModel.find();
        res.send(items);
    }
))

// router.get("/questions", asyncHandler(
//     async (req, res) => {
//         const question = await QuestionModel.find();
//         res.send(question);
//     }
// ))

// router.get("/seller", asyncHandler(
//     async (req, res) => {
//         const sellerCount = await SellerModel.countDocuments();
//         if(sellerCount> 0){
//             res.send("seller is already done!");
//             return;
//         }
//
//         await SellerModel.create(sample_sellers);
//         res.send("seller Is Done!");
//     }
// ))


router.post('/additem', asyncHandler(
    async (req, res) => {
        const {name, price,catagory,countity} = req.body;
        res.status(HTTP_SUCCESS)
                .send('ITEM ADDED SUCCESSFULLY!');
        const newItem:Item = {
            id:'',
            name,
            price,
            catagory,
            countity,
        }

        await ItemModel.create(newItem);

    }
))

router.post('/updateitem', asyncHandler(
    async (req, res) => {
        const {name, price,catagory,countity} = req.body;
        res.status(HTTP_SUCCESS)
            .send('ITEM ADDED SUCCESSFULLY!');
        const newItem:Item = {
            id:'',
            name,
            price,
            catagory,
            countity,
        }

        await ItemModel.updateOne(newItem);

    }
))

router.get("/search/:searchTerm", asyncHandler(
    async (req, res) => {
        const searchRegex = new RegExp(req.params.searchTerm, 'i');
        const items = await ItemModel.find({name: {$regex:searchRegex}})
        res.send(items);
    }
))

router.get("/:itemId", asyncHandler(
    async (req, res) => {
        const item = await ItemModel.findById(req.params.itemId);
        res.send(item);
    }
))

//Delete Data

router.route('/:id').delete((req, res) => {
    ItemModel.findByIdAndDelete(req.params.id)
        .then(() => res.json('Item deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

export default router;