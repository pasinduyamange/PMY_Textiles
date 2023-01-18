import {Router} from 'express';
import {sample_items} from '../data';
import asyncHandler from 'express-async-handler';
import { AllitemsModel } from '../models/Allitems.model';
const router = Router();

router.get("/items", asyncHandler(
 async (req, res) => {
    const itemCount = await AllitemsModel.countDocuments();
    if(itemCount> 0){
      res.send("Seed is already done!");
      return;
    }

    await AllitemsModel.create(sample_items);
    res.send("Seed Is Done!");
}
))


router.get("/",asyncHandler(
  async (req, res) => {
    const items = await AllitemsModel.find();
      res.send(items);
  }
))

router.get("/search/:searchTerm", asyncHandler(
  async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const items = await AllitemsModel.find({name: {$regex:searchRegex}})
    res.send(items);
  }
))

router.get("/tags", asyncHandler(
  async (req, res) => {
    const tags = await AllitemsModel.aggregate([
      {
        $unwind:'$tags'
      },
      {
        $group:{
          _id: '$tags',
          count: {$sum: 1}
        }
      },
      {
        $project:{
          _id: 0,
          name:'$_id',
          count: '$count'
        }
      }
    ]).sort({count: -1});

    const all = {
      name : 'All',
      count: await AllitemsModel.countDocuments()
    }

    tags.unshift(all);
    res.send(tags);
  }
))

router.get("/tag/:tagName",asyncHandler(
  async (req, res) => {
    const items = await AllitemsModel.find({tags: req.params.tagName})
    res.send(items);
  }
))

router.get("/:itemId", asyncHandler(
  async (req, res) => {
    const items = await AllitemsModel.findById(req.params.itemId);
    res.send(items);
  }
))


export default router;