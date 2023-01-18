import { Allitems } from "./Allitems";

export class CartItem{
  constructor(public food:Allitems){ }
  quantity:number = 1 ;
  price: number = this.food.price;
}
