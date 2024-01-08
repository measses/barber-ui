import { Repository } from "./base-model";

export interface OrderProduct extends Repository{
  orderId:number;
  productId:number;
  amount:number;
}
